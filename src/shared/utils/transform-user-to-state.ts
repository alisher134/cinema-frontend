import { TProtectUser } from '../services/auth/auth.interface';
import { EnumUserRole } from '../types/user.types';

export interface IUserState {
	id: string;
	isLoggedIn: boolean;
	isAdmin: boolean;
}

export const transformUserToState = (user: TProtectUser): IUserState | null => {
	return {
		...user,
		isAdmin: user.role === EnumUserRole.ADMIN,
		isLoggedIn: true
	};
};
