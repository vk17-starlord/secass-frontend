import { useStorage } from '@vueuse/core';
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
  
  static async fetchUserOrganizations(userId: string): Promise<any> {
    try {
      const response = await axios.get(`http://localhost:3002/api/v1/organizations/user/${userId}`);
      useStorage('organizations', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching user organizations:', error);
      throw error;
    }
  }

  static async fetchOrganizationUsers(organizationId: string): Promise<any> {
    try {
      const response = await axios.get(`http://localhost:3002/api/v1/users/list/organization/${organizationId}`);
      useStorage('organizationUser', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching user organizations:', error);
      throw error;
    }
  }
}