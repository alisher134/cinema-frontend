import { z } from 'zod';

export const authSchema = z.object({
	email: z
		.string()
		.email('Введите корректный email')
		.min(1, 'Email обязателен'),
	username: z
		.string()
		.min(3, 'Username должен быть не менее 3 символов')
		.optional(),
	password: z
		.string()
		.min(8, 'Пароль должен быть не менее 8 символов')
		.min(1, 'Пароль обязателен')
});
