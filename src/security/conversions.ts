export const decodeBase64 = (base64String: string | null): ArrayBuffer | null => {
   if(base64String){
    const binaryString = atob(base64String);
    const length = binaryString.length;
    const bytes = new Uint8Array(length);
  
    for (let i = 0; i < length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
  
    return bytes.buffer;
   }
   return null

  };
  export const encodeBase64 = (buffer: ArrayBuffer | null): string  => {
    if (buffer) {
      const binaryArray = new Uint8Array(buffer);
      
      // Convert Uint8Array to a regular array of numbers
      const numberArray = Array.from(binaryArray);
  
      // Convert the array to a binary string
      const binaryString = String.fromCharCode.apply(null, numberArray);
  
      // Convert the binary string to base64
      const base64String = btoa(binaryString);
  
      return base64String;
    }
    return "";
  };
  
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
  


