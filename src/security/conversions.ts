
export function encodeBase64(buffer: ArrayBuffer): string {
  const uint8Array = new Uint8Array(buffer);
  const byteArray = Array.from(uint8Array);
  return btoa(byteArray.map(byte => String.fromCharCode(byte)).join(''));
}

export function decodeBase64(base64String: string): ArrayBuffer {
  const binaryString = atob(base64String);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}
  
  export async function exportPublicKeyAsBase64(publicKey: CryptoKey): Promise<string> {
    try {
      const exportedKey = await crypto.subtle.exportKey("spki", publicKey);
      const base64Key = encodeBase64(exportedKey);
      return base64Key;
    } catch (error) {
      console.error("Error exporting public key:", error);
      throw error;
    }
  }
  
  export async function exportPrivateKeyAsBase64(privateKey: CryptoKey): Promise<string> {
    try {
      const exportedKey = await crypto.subtle.exportKey("pkcs8", privateKey);
      const base64Key = encodeBase64(exportedKey);
      return base64Key;
    } catch (error) {
      console.error("Error exporting private key:", error);
      throw error;
    }
  }
  


export function stringToBase64(text: string): string {
  // Determine the environment (browser or Node.js)
  if (typeof btoa === 'function') {
    // Use built-in browser functionality for efficiency
    return btoa(text);
  } else {
    return text;
  }
}
