export const hashText = async (text: string , saltText:string): Promise<string> => {
    // Create a TextEncoder to convert the input text to an ArrayBuffer
    const enc = new TextEncoder();
    const textArrayBuffer = enc.encode(text);
  
    

    const salt = enc.encode(saltText);
  
    // Import the password material (encoded text) as a raw key
    const keyMaterial = await crypto.subtle.importKey(
      'raw',
      textArrayBuffer,
      { name: 'PBKDF2' }, // PBKDF2 (Password-Based Key Derivation Function 2)
      false,
      ['deriveBits']
    );
  
    // Derive the bits (hash the password) using PBKDF2
    const hashedPassword = await crypto.subtle.deriveBits(
      {
        name: 'PBKDF2',
        salt: salt,
        iterations: 100000, // Number of iterations to make the derivation more computationally expensive
        hash: 'SHA-256', // SHA-256 hash function
      },
      keyMaterial,
      256 // Specify the desired bit length of the derived key
    );
  
    // Convert the ArrayBuffer to a base64-encoded string
    const base64String = btoa(String.fromCharCode.apply(null, Array.from(new Uint8Array(hashedPassword))));
  
    return base64String;
  };
  