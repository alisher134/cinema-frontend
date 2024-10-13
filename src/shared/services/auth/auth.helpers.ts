import Cookies from 'js-cookie';
import { EnumTokens } from './auth.interface';

export const getAccessTokenFromCookie = () => {
	return Cookies.get(EnumTokens.ACCESS_TOKEN);
};

export const saveAccessTokenToCookie = (accessToken: string) => {
	Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken);
};

export const removeAccessTokenFromCookie = () => {
	Cookies.remove(EnumTokens.ACCESS_TOKEN);
};
