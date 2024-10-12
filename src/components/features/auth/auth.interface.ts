export interface IFormValues {
	email: string;
	username?: string;
	password: string;
}

export enum EnumAuthType {
	LOGIN = 'login',
	REGISTER = 'register'
}
