import { SignUpRequest, SignUpResponse } from "@/interfaces/auth";
import {
  decodeBase64,
  encodeBase64,
  exportPrivateKeyAsBase64,
  exportPublicKeyAsBase64,
  stringToBase64,
} from "@/security/conversions";
import { encryptAESGCM } from "@/security/encryption";
import { hashText } from "@/security/hashing";
import {
  generateRSAKeyPair,
  generateSymmetricKey,
} from "@/security/keyDerivation";
import AuthServiceWrapper from "@/services/AuthServiceWrapper";
import { useStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { encode } from "punycode";
import { Ref, computed, ref } from "vue";

export const useAuthStore = defineStore("AuthStore", () => {
  const rootKey: Ref<string | null> = ref(null);
  const encodedRootKey:Ref<any> = ref(null);
  const currentPayload:Ref<any> = ref(null);
  
  const userData:Ref<any | null>= ref(null);

  const keyStatus = ref("Generating Keys");

  const getUserData = computed(()=>{
    return userData;
  })



  const signup = async (payload:any): Promise<any> => {
    rootKey.value = await hashText(
      payload.email + payload.passHash,
      payload.email
    );

    const hashedRootkey = await hashText(rootKey.value, payload.email);
    currentPayload.value = {
      name:payload.name,
      email:payload.email,
      passHash:{
        alg:'PBKDF2',
        hash:payload.passHash
      }
    }
    rootKey.value = hashedRootkey;
    encodedRootKey.value = stringToBase64(rootKey.value);
    console.log(rootKey , 'rootkey')
    console.log(currentPayload.value,'payload');
    return true;
  };

  const initializeKeys = async () => {
    if (rootKey.value) {
      const status = [
        "Generating Symmetric Key",
        "Generated Symmetric Key",
        "Encrypting Symmetric Key",
        "Generating Public Private Keys",
        "Encrypting Private Keys",
        "All set to go !!",
      ];

  
      const symetricKey = await generateSymmetricKey();

      const keyBuffer = decodeBase64(rootKey.value) || new Uint8Array(0);

      try {
        const key = await crypto.subtle.importKey(
          "raw",
          keyBuffer,
          { name: "AES-GCM" },
          false,
          ["encrypt", "decrypt"]
        );

        if (symetricKey) {

          const encryptedSymetricKey = await encryptAESGCM(
            key,
            encodeBase64(symetricKey)
          );

          const base64SymetricKey = await encodeBase64(encryptedSymetricKey.ciphertext);
          

          const RSAkeys = await generateRSAKeyPair();
          const publicKey = await exportPublicKeyAsBase64(RSAkeys.publicKey);
          const privateKey = await exportPrivateKeyAsBase64(RSAkeys.privateKey);

          if (privateKey) {
            const encryptedprivateKey = await encryptAESGCM(key, privateKey);
            const encodedPrivateKey = await encodeBase64(encryptedprivateKey.ciphertext);

            const payload = {
              "symKey": {
                  "encryptedData": base64SymetricKey,
                  "alg": "AESGCM"
              },
              "asymmKey": {
                  "public": publicKey,
                  "encryptedPvtKey": encodedPrivateKey,
                  "alg": "RSA"
              },
              ...currentPayload.value
            }
          
           const authService = new AuthServiceWrapper();
           const response = await authService.createUser(payload);
           userData.value = response;
           if(await response){
            return true;
           }else{
            return false;
           }
          }

        }
      } catch (error) {
        console.error("Error importing key:", error);
        throw error;
      }
    }
  };

  const signIn = async(payload:any)=>{
    const res = await signup(payload);
    if(res){
      const authService = new AuthServiceWrapper();
      const response = await authService.getUserDetails(payload.email);
      console.log(response);
      if(response){
        if(response.passHash.hash == currentPayload.value.passHash.hash ){
          userData.value = response;
          return true;
        }else{
          alert('Wrong Email Or Password');
        }

      }else{
        alert('Wrong Email Or Password');
        return false;
      }
    }

  }

  const resetAll = ()=>{
    rootKey.value = null
    currentPayload.value = null
    userData.value = null;
    keyStatus.value = 'Generating Keys';
  }

  return { signup, signIn ,resetAll , rootKey, encodedRootKey,getUserData, keyStatus, initializeKeys , userData };
});
