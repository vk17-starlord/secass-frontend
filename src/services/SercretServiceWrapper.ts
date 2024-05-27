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

  static async shareSecret(payload: any,secretID:any) {
    try {
      const response = await axios.post(`http://localhost:3002/api/v1/secrets/${secretID}/share`, payload);
      console.log('Secret shared successfully:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error shared secret:', error);
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

  static async getKeysforUser(orgid:any,userid:any){
    try {
      const response = await axios.get(`http://localhost:3002/api/v1/secrets/organization/${orgid}/user/${userid}`);
      return response.data;
    } catch (error) {
      console.error('Error gettings users for secret:', error);
      throw error;
    }
  }

  static async getUsersforSecret(secretId:any,orgId:any) {
    try {
      const response = await axios.get(`http://localhost:3002/api/v1/secrets/${secretId}/organization/${orgId}/users?page=1&limit=5`);
      return response.data;
    } catch (error) {
      console.error('Error gettings users for secret:', error);
      throw error;
    }
  }

}
