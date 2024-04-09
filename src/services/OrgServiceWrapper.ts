import axios from 'axios';

export class OrganizationService {
  static async createOrganization(payload: any) {
    try {
      const response = await axios.post('http://localhost:3002/api/v1/organizations', payload);

      console.log('Organization created successfully:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error creating organization:', error);
      throw error;
    }
  }
}