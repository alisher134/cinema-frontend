'use client';

import { EnumAuthType } from './auth.interface';
import styles from './Auth.module.scss';
import { FormButtons } from './form-buttons/FormButtons';
import { FormFields } from './FormFields';
import { useAuth } from './useAuth';

export const Auth = () => {
	const {
		errors,
		registerInput,
		type,
		setType,
		handleSubmit,
		handleClick,
		errorMessage,
		isPending
	} = useAuth();
	const isLogin = type === EnumAuthType.LOGIN;

	return (
		<div className={styles.auth}>
			<form onSubmit={handleSubmit(handleClick)} className={styles.form}>
				<div className={styles.form_header}>
					<h1 className={styles.heading}>
						{isLogin ? 'Добро пожаловать' : 'Зарегистрироваться'}
					</h1>

					<p className={styles.subheading}>
						{isLogin
							? 'Мы скучали по тебе! Пожалуйста, введите свои данные.'
							: 'Создайте аккаунт, чтобы продолжить.'}
					</p>

					{errorMessage && <p className={styles.error}>{errorMessage}</p>}
				</div>

				<FormFields
					registerInput={registerInput}
					isLogin={isLogin}
					errors={errors}
				/>

				<FormButtons
					isLogin={isLogin}
					setType={setType}
					isLoading={isPending}
				/>
			</form>
		</div>
	);
};
