import { Input } from '@/components/ui/inputs';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { IFormValues } from './auth.interface';
import styles from './Auth.module.scss';

interface FormFieldsProps {
	isLogin: boolean;
	errors: FieldErrors<IFormValues>;
	registerInput: UseFormRegister<IFormValues>;
}

export const FormFields = ({
	isLogin,
	registerInput,
	errors
}: FormFieldsProps) => {
	return (
		<div>
			<Input
				{...registerInput('email')}
				label='Email'
				type='email'
				placeholder='Введите email'
				error={errors.email}
				className={styles.input}
			/>

			{!isLogin && (
				<Input
					{...registerInput('username')}
					label='Username'
					type='username'
					placeholder='Введите username'
					error={errors.username}
					className={styles.input}
				/>
			)}

			<Input
				{...registerInput('password')}
				label='Password'
				type='password'
				placeholder='Введите password'
				error={errors.password}
				className={styles.input}
			/>
		</div>
	);
};
