// Function to generate a random AES-GCM key

const staticIV = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

// Function to encrypt plaintext using AES-GCM
export async function encryptAESGCM(
  key: CryptoKey,
  plaintext: string
): Promise<{ ciphertext: ArrayBuffer; iv: Uint8Array }> {
  const iv = staticIV;
  const encodedText = new TextEncoder().encode(plaintext);

  const ciphertext = await crypto.subtle.encrypt(
    {
      name: "AES-GCM",
      iv: iv,
    },
    key,
    encodedText
  );

  return { ciphertext, iv };
}

// Function to decrypt ciphertext using AES-GCM

export async function decryptWithIV(ciphertext: ArrayBuffer, key: CryptoKey, iv: Uint8Array): Promise<string> {
  try {
    // Decrypt the data using AES-GCM with the provided key and IV
    const decryptedData = await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv: iv },
      key,
      ciphertext
    );

    // Convert the decrypted data to a string
    const decryptedText = new TextDecoder().decode(decryptedData);

    return decryptedText;
  } catch (error) {
    console.error('Error decrypting data:', error);
    throw error;
  }
}