export interface IUser {
	id: string;
	createdAt: string;
	updatedAt: string;
	email: string;
	username: string;
	role: EnumUserRole;
}

export enum EnumUserRole {
	USER = 'USER',
	ADMIN = 'ADMIN'
}
