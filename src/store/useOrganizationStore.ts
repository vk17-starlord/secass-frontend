import { defineStore } from 'pinia';
import { Ref, computed,ref } from 'vue';
import { useAuthStore } from './useAuthStore';
import { OrganizationService } from '@/services/OrgServiceWrapper';
import { decodeBase64, encodeBase64, exportPrivateKeyAsBase64, exportPublicKeyAsBase64 } from '@/security/conversions';
import { encryptAESGCM } from '@/security/encryption';
import { generateRSAKeyPair } from '@/security/keyDerivation';

export const useOrganizationStore = defineStore('OrganizationStore', () => {
  // Use ref for organizations array to maintain reactivity
  const organizations:Ref<any> = ref([]);

  const authStore = useAuthStore();
  // Methods to manage organizations

  const createOrganization = async( payload: any) => {

	const rootKey = authStore.rootKey || '';
	const keyBuffer = decodeBase64(rootKey) || new Uint8Array(0);
	const currentUser = authStore.getUserData;
	const key = await crypto.subtle.importKey(
		"raw",
		keyBuffer,
		{ name: "AES-GCM" },
		false,
		["encrypt", "decrypt"]
	  );
	  
	const RSAkeys = await generateRSAKeyPair();
	const publicKey = await exportPublicKeyAsBase64(RSAkeys.publicKey);
	const privateKey = await exportPrivateKeyAsBase64(RSAkeys.privateKey);

	if (privateKey) {
	  const encryptedprivateKey = await encryptAESGCM(key, privateKey);
	  const encodedPrivateKey = await encodeBase64(encryptedprivateKey.ciphertext);
	  

	const orgpayload = {
		"name": payload.name,
		"billingEmail":currentUser.value?.email || null,
		"adminEmail": currentUser.value?.email || null,
		"asymmKey": {
			"public":publicKey ,
			"encryptedPvtKey":encodedPrivateKey,
		},
		"adminPvtKey":authStore.encodedRootKey
	}
	const res = await OrganizationService.createOrganization(orgpayload);
	console.log(res);

	}
  };
  return { createOrganization}
});
