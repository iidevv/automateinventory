import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const login = async (email: string, password: string) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/login`, { email, password }, {
            withCredentials: true,
        });

        const token = response.data.token;
        console.log(token);
        
        if (token) {
            document.cookie = `token=${token}; path=/;`;
        }

        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Login failed. Please try again.');
    }
};
