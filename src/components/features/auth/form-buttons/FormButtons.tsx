import { Button } from '@/components/ui/button';
import { EnumAuthType } from '../auth.interface';
import styles from './FormButtons.module.scss';

interface FormButtonsProps {
	isLogin: boolean;
	setType: (value: string) => void;
}

export const FormButtons = ({ isLogin, setType }: FormButtonsProps) => {
	return (
		<div className={styles.buttons}>
			<Button type='submit' className={styles.button}>
				{isLogin ? 'Войти' : 'Зарегистрироваться'}
			</Button>

			{isLogin ? (
				<p className={styles.toggle}>
					Нет аккаунта?
					<button type='button' onClick={() => setType(EnumAuthType.REGISTER)}>
						Регистрация
					</button>
				</p>
			) : (
				<p className={styles.toggle}>
					Уже есть аккаунт?
					<button type='button' onClick={() => setType(EnumAuthType.LOGIN)}>
						Войти
					</button>
				</p>
			)}
		</div>
	);
};
