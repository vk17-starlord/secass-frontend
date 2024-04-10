import { getPublicKeyFromBase64 } from "./conversions";

export async function generateSymmetricKey(): Promise<ArrayBuffer> {
  try {
    // Generate the AES-GCM key
    const key = await crypto.subtle.generateKey(
      {
        name: 'AES-GCM', // Specify the algorithm (e.g., AES-GCM)
        length: 256, // Key size in bits
      },
      true, // Can be used for both encryption and decryption
      ['encrypt', 'decrypt'] // Key usage
    );

    // Export the key material
    const keyMaterial = await crypto.subtle.exportKey('raw', key);

    return keyMaterial;
  } catch (error) {
    console.error('Error generating symmetric key:', error);
    throw error;
  }
}

export async function generateRSAKeyPair(): Promise<CryptoKeyPair> {
  try {
    const keyPair = await crypto.subtle.generateKey(
      {
        name: "RSA-OAEP",
        modulusLength: 2048, // You can adjust the key size as needed
        publicExponent: new Uint8Array([0x01, 0x00, 0x01]), // 65537 in hex
        hash: "SHA-256",
      },
      true,
      ["encrypt", "decrypt"]
    );

    return keyPair;
  } catch (error) {
    console.error("Error generating RSA key pair:", error);
    throw error;
  }
}


export async function encryptSymmetricKeyWithPublicKey(publicKey: string): Promise<ArrayBuffer> {
  try {
    // Generate the symmetric key (AES-GCM)
    const key = await crypto.subtle.generateKey(
      {
        name: 'AES-GCM', // Specify the algorithm (e.g., AES-GCM)
        length: 256, // Key size in bits
      },
      true, // Can be used for both encryption and decryption
      ['encrypt', 'decrypt'] // Key usage
    );

    // Export the key material
    const keyMaterial = await crypto.subtle.exportKey('raw', key);

    // Import the RSA public key
    const rsaPublicKey = await getPublicKeyFromBase64(publicKey);

    // Encrypt the symmetric key with the RSA public key
    const encryptedSymmetricKey = await crypto.subtle.encrypt(
      {
        name: "RSA-OAEP"
      },
      rsaPublicKey,
      keyMaterial
    );

    return encryptedSymmetricKey;
  } catch (error) {
    console.error('Error encrypting symmetric key:', error);
    throw error;
  }
}
