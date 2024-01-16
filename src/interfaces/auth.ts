// Request Schemas
export interface SignUpRequest {
  name: string;
  email: string;
  passHash?: {
    alg: "pbkdf2" | "argon2";
    hash: string;
  };
}

export interface PatchUserRequest {
  name?: string;
  email?: string;
  passHash?: {
    hash: string;
    alg: string;
  };
  symKey?: {
    encryptedData: string;
    alg: string;
  };
  asymmKey?: {
    public: string;
    encryptedPvtKey: string;
    alg: string;
  };
  isBlackListed?: boolean;
}

export interface CreateOrganizationRequest {
  name: string;
  billingEmail: string;
  symmKey: {
    publicKey: string;
    encryptedPvtKey: string;
    alg: string;
  };
}

// Response Schemas
export interface SignUpResponse {
  id: string;
  name: string;
  email: string;
  passHash: {
    alg: string;
    hash: string;
  };
  createdAt: string;
  updatedAt: string;
  isBlackListed: boolean;
}

export interface PatchUserResponse {
  // No specific response body for a successful PATCH operation
}

export interface GetUserResponse {
  id: string;
  name: string;
  email: string;
  passHash: {
    alg: string;
    hash: string;
  };
  createdAt: string;
  updatedAt: string;
  isBlackListed: boolean;
}

export interface CreateOrganizationResponse {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  billingEmail: string;
  adminEmail: string;
  symmKey: {
    publicKey: string;
    encryptedPvtKey: string;
    alg: string;
  };
}

export interface GetOrganizationResponse {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  billingEmail: string;
  adminEmail: string;
  symmKey: {
    publicKey: string;
    encryptedPvtKey: string;
    alg: string;
  };
}
