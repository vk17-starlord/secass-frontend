import axios from 'axios';

export class SecretService {
  static async createSecret(payload: any) {
    try {
      const response = await axios.post('http://localhost:3002/api/v1/secrets', payload);
      console.log('Secret created successfully:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error creating secret:', error);
      throw error;
    }
  }

  static async fetchSecrets(organizationId: undefined, userId: undefined) {
    try {
      const response = await axios.get(`http://localhost:3002/api/v1/secrets/organization/${organizationId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching secrets:', error);
      throw error;
    }
  }
  
  static async deleteSecret(secretId: any) {
    try {
      const response = await axios.delete(`http://localhost:3002/api/v1/secrets/${secretId}`);
      console.log('Secret deleted successfully:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error deleting secret:', error);
      throw error;
    }
  }
}
