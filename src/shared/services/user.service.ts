import { axiosInstance } from '@/api';
import { API_CONFIG } from '../config/api.config';
import { IUser } from '../types/user.types';

export const UserService = {
	async getProfile() {
		return await axiosInstance.get<IUser>(API_CONFIG.USER('profile'));
	}
};
