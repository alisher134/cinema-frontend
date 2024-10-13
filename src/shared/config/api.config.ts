export const API_CONFIG = {
	AUTH: (url: string) => `/auth/${url}`,
	USER: (url: string = '') => `/user/${url}`
};
