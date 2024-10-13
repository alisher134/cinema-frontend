import { EnumUserRole, IUser } from '@/shared/types/user.types';

export interface IAuthResponse {
	user: IUser;
	accessToken: string;
}

export enum EnumTokens {
	ACCESS_TOKEN = 'accessToken',
	REFRESH_TOKEN = 'refreshToken'
}

export interface ITokenInside {
	id: string;
	role: EnumUserRole;
	iat: number;
	exp: number;
}

export type TProtectUser = Omit<ITokenInside, 'iat' | 'exp'>;
