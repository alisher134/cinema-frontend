import { axiosBase } from '@/api';
import {
	EnumAuthType,
	IFormValues
} from '@/components/features/auth/auth.interface';
import { API_CONFIG } from '@/shared/config/api.config';
import {
	removeAccessTokenFromCookie,
	saveAccessTokenToCookie
} from './auth.helpers';
import { IAuthResponse } from './auth.interface';

export const AuthService = {
	async auth(type: EnumAuthType, data: IFormValues) {
		const response = await axiosBase.post<IAuthResponse>(
			API_CONFIG.AUTH(type),
			data
		);

		if (response.data.accessToken)
			saveAccessTokenToCookie(response.data.accessToken);

		return response.data;
	},

	async getNewTokens() {
		const response = await axiosBase.post<IAuthResponse>(
			API_CONFIG.AUTH('new-tokens')
		);

		if (response.data.accessToken)
			saveAccessTokenToCookie(response.data.accessToken);

		return response.data;
	},

	async getNewTokensWithRefreshToken(refreshToken: string) {
		const response = await axiosBase.post<IAuthResponse>(
			API_CONFIG.AUTH('new-tokens'),
			{
				headers: {
					Authorization: `Bearer ${refreshToken}`
				}
			}
		);

		if (response.data.accessToken)
			saveAccessTokenToCookie(response.data.accessToken);

		return response.data;
	},

	async logout() {
		await axiosBase.post(API_CONFIG.AUTH('logout'));
		removeAccessTokenFromCookie();
	}
};
