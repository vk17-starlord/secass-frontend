import axios from 'axios';

export class InviteService {
  static async createInvite(payload: any) {
    try {
      const response = await axios.post('http://localhost:3002/api/v1/invites', payload);
      console.log('Invite created successfully:', response.data);
      alert('Invite created successfully');
      return response.data;
    } catch (error) {
      alert('Error creating Invite');
      console.error('Error creating Invite:', error);
      throw error;
    }
  }

static async  fetchInvites(email: any): Promise<any> {
  try {
    const response = await axios.get(`http://localhost:3002/api/v1/invites/user/email?email=${email}`, {
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching invites:', error);
    throw error;
  }
}


static async acceptInvite(inviteId: any) {
  try {
    const response = await axios.post(`http://localhost:3002/api/v1/invites/accept/${inviteId}`);
    console.log('Invite accepted:', response.data);
    alert('Invite accepted successfully');
    return response.data
  } catch (error) {
    console.error('Error accepting invite:', error);
   return null
  }
}

static async deleteInvite(inviteId: any) {
  try {
    const response = await axios.delete(`http://localhost:3002/api/v1/invites/${inviteId}`);
    console.log('Invite deleted:', response.data);
    alert('Invite deleted successfully');
    return response.data
  } catch (error) {
    console.error('Error deleting invite:', error);
   return null
  }
}


}