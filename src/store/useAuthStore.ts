import { SignUpResponse } from "@/interfaces/auth";
import {
  decodeBase64,
  encodeBase64,
  exportPublicKeyAsBase64,
} from "@/security/conversions";
import { encryptAESGCM } from "@/security/encryption";
import { hashText } from "@/security/hashing";
import {
  generateRSAKeyPair,
  generateSymmetricKey,
} from "@/security/keyDerivation";
import { useStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { Ref, ref } from "vue";

export const useAuthStore = defineStore("AuthStore", () => {
  const rootKey: Ref<string | null> = ref(null);

  const userData = useStorage('user', String, undefined , {
    serializer: {
      read: (v: any) => v ? JSON.parse(v) : null,
      write: (v: any) => JSON.stringify(v),
    },
  })

  const keyStatus = ref("Generating Keys");
  const signup = async (payload: any): Promise<SignUpResponse> => {
    rootKey.value = await hashText(
      payload.email + payload.passHash,
      payload.email
    );

    const hashedRootkey = await hashText(rootKey.value, payload.email);
    console.log("hashed root key", hashedRootkey);

    await new Promise((resolve) => setTimeout(() => {
      userData.value ={ email: payload.email, name: payload.name };
      resolve(true); // Call the resolve function to fulfill the Promise
  }, 500));
  

    return {
      id: "123",
      name: payload.name,
      email: payload.email,
      passHash: {
        alg: "pbkdf2",
        hash: "hashedPassword",
      },
      createdAt: "2022-01-01T12:00:00Z",
      updatedAt: "2022-01-02T14:30:00Z",
      isBlackListed: false,
    };
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

          console.log("encrypted symmetric key", symetricKey);

          const RSAkeys = await generateRSAKeyPair();
          const publicKey = await exportPublicKeyAsBase64(RSAkeys.publicKey);
          const privateKey = await exportPublicKeyAsBase64(RSAkeys.publicKey);

          if (privateKey) {
            const encryptedprivateKey = await encryptAESGCM(key, privateKey);
            console.log("public key", publicKey);
            console.log("encrypted private key", encryptedprivateKey);
          }
        }

        return true;
      } catch (error) {
        console.error("Error importing key:", error);
        throw error;
      }
    }
  };

  return { signup, keyStatus, initializeKeys , userData };
});
