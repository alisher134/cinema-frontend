import { API_URL } from '@/shared/constants';
import {
	getAccessTokenFromCookie,
	removeAccessTokenFromCookie
} from '@/shared/services/auth/auth.helpers';
import { AuthService } from '@/shared/services/auth/auth.service';
import axios, { CreateAxiosDefaults } from 'axios';
import { errorCatch, getContentType } from './api.helper';

const axiosOptions: CreateAxiosDefaults = {
	baseURL: API_URL,
	withCredentials: true,
	headers: getContentType()
};

export const axiosBase = axios.create(axiosOptions);
export const axiosInstance = axios.create(axiosOptions);

axiosInstance.interceptors.request.use(config => {
	const accessToken = getAccessTokenFromCookie();

	if (config && config.headers && accessToken)
		config.headers.Authorization = `Bearer ${accessToken}`;

	return config;
});

axiosInstance.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config;

		if (
			(error?.response?.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true;
			try {
				await AuthService.getNewTokens();
				return axiosInstance.request(originalRequest);
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') removeAccessTokenFromCookie();
			}
		}

		throw error;
	}
);
