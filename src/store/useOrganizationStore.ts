import { defineStore } from 'pinia';
import { Ref, computed,ref } from 'vue';
import { useAuthStore } from './useAuthStore';
import { OrganizationService } from '@/services/OrgServiceWrapper';
import { decodeBase64, encodeBase64, exportPrivateKeyAsBase64, exportPublicKeyAsBase64, getPublicKeyFromBase64 } from '@/security/conversions';
import { encryptAESGCM } from '@/security/encryption';
import { generateRSAKeyPair, generateSymmetricKey ,encryptSymmetricKeyWithPublicKey} from '@/security/keyDerivation';
import { useStorage } from '@vueuse/core';

export const useOrganizationStore = defineStore('OrganizationStore', () => {
  // Use ref for organizations array to maintain reactivity
  const organizations:Ref<any> = ref([]);
  const currentOrganization:Ref<any> = ref(null);
  const authStore = useAuthStore();
  const orgUsers:Ref<any> = ref([]);

  const orgUserStorage = useStorage('orgUser', []);
  // Methods to manage organizations

  const getOrganizationByID = (id: any)=>{

	return organizations.value.filter((org: { id: any; }) => {
		return org.id == id;
	})[0]
  }

  const currentOrgRole = ref('viewer');
  
  const setOrganization = (org: any)=>{
	if(authStore.getUserData.value.email == org.adminEmail){
		currentOrgRole.value = 'admin';
	}else{
		currentOrgRole.value = 'viewer';
	}
	currentOrganization.value = org;
  }

  const removeOrganization = ()=>{
	currentOrganization.value = null;
  }

  const getOrganizations = async()=>{
	try {
		const id = authStore.getUserData.value.id;
		const res = await OrganizationService.fetchUserOrganizations(id);
		if(res){
			organizations.value = res;
		}
	} catch (error) {
		alert('Error occurred in getting details of org')
	}
  }

  const createOrganization = async( payload: any) => {

	const rootKey = authStore.rootKey || '';
	const keyBuffer = decodeBase64(rootKey) || new Uint8Array(0);
	const currentUser = authStore.getUserData;

	// get admin public key
	const publicKey  = authStore.getUserData.value.asymmKey.public;
	const encryptedOrganizationKey = await encryptSymmetricKeyWithPublicKey(publicKey);
	const encodedOrganizationKey = await encodeBase64(encryptedOrganizationKey);
	

	const orgpayload = {
		"name": payload.name,
		"billingEmail": authStore.getUserData.value.email,
		"adminEmail": authStore.getUserData.value.email,
		"symKey": {
		  "encryptedData":encodedOrganizationKey,
		  "alg": "AES-GCM"
		}
	}
	try {
		const res = await OrganizationService.createOrganization(orgpayload);
		await getOrganizations();
	} catch (error) {
		alert('Error occurred while creating organization')
	}
  };

  const getOrganizationUsers = async(organizationId: any)=>{
	try {
		const res = await OrganizationService.fetchOrganizationUsers(organizationId);
		console.log(res.data);
		res.data.forEach((user:any)=>{
			const org = user.organizations.find((org: { id: any; }) => org.id == organizationId);
			if(org.pvtKey){
				user.status = 'Active';
				user.key = 'Activated';
			}
			else{
				user.status = 'Inactive';
				user.key = 'Generate';
			}
		})
		orgUsers.value = res.data;
		return res.data;
	} catch (error) {
		console.log(error);
		alert('Error occurred in getting details of org')
	}
  }

  const serachOrgUser = (name: string)=>{
	if(name == ''){
		orgUsers.value = orgUserStorage.value;
		return
	}
	 orgUsers.value = orgUserStorage.value.filter((user:any) => {
		return user.name.toLowerCase().includes(name.toLowerCase()) || user.email.toLowerCase().includes(name.toLowerCase());
	})
  }
  return { createOrganization , setOrganization ,currentOrgRole, currentOrganization ,removeOrganization, getOrganizations , organizations , getOrganizationByID, getOrganizationUsers, serachOrgUser, orgUsers}
});
