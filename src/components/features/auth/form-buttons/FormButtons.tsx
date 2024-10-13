import { Button } from '@/components/ui/button';
import { EnumAuthType } from '../auth.interface';
import styles from './FormButtons.module.scss';

interface FormButtonsProps {
	isLogin: boolean;
	setType: (value: string) => void;
	isLoading: boolean;
}

export const FormButtons = ({
	isLogin,
	setType,
	isLoading
}: FormButtonsProps) => {
	return (
		<div className={styles.buttons}>
			<Button type='submit' className={styles.button} disabled={isLoading}>
				{isLogin ? 'Войти' : 'Зарегистрироваться'}
			</Button>

			<p className={styles.toggle}>
				{isLogin ? 'Нет аккаунта?' : 'Уже есть аккаунт?'}
				<button
					type='button'
					onClick={() =>
						setType(isLogin ? EnumAuthType.REGISTER : EnumAuthType.LOGIN)
					}
				>
					{isLogin ? 'Регистрация' : 'Войти'}
				</button>
			</p>
		</div>
	);
};
