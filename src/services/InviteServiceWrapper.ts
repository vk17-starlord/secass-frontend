import axios from 'axios';

export class InviteService {
  static async createInvite(payload: any) {
    try {
      const response = await axios.post('http://localhost:3002/api/v1/invites', payload);

      console.log('Invite created successfully:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error creating Invite:', error);
      throw error;
    }
  }
}