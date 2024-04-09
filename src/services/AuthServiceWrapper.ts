import axios, { AxiosResponse } from 'axios';

class AuthServiceWrapper {
    private baseUrl: string;

    constructor(baseUrl: string = 'http://localhost:3002') {
        this.baseUrl = baseUrl;
    }

    async getUserDetails(email: string): Promise<any> {
        try {
            const response: AxiosResponse = await axios.get(`${this.baseUrl}/api/v1/users/by/email?email=${email}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching user details:', error);
            throw error;
        }
    }

    async createUser(userData: any): Promise<any> {
        try {
            const response: AxiosResponse = await axios.post(`http://localhost:3002/api/v1/users/create`, userData);
            return response.data;
        } catch (error) {
            console.error('Error creating user:', error);
            throw error;
        }
    }
}

export default AuthServiceWrapper;
