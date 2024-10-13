import { TProtectUser } from '../services/auth/auth.interface';

export interface IUserState {
	id: string;
	isLoggedIn: boolean;
}

export const transformUserToState = (user: TProtectUser): IUserState | null => {
	return {
		...user,
		isLoggedIn: true
	};
};
