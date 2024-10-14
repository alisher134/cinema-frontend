import { AuthService } from '@/shared/services/auth/auth.service';
import { useMutation } from '@tanstack/react-query';
import { LucideLogOut } from 'lucide-react';
import styles from './LogoutButton.module.scss';

export const LogoutButton = () => {
	const { mutateAsync: logoutMutate } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => AuthService.logout(),
		onSuccess() {
			window.location.reload();
		}
	});

	const handleLogout = async () => {
		await logoutMutate();
	};

	return (
		<li className={styles.item}>
			<button onClick={() => handleLogout()} className={styles.button}>
				<LucideLogOut className={styles.icon} />
				<span className={styles.name}>Выйти</span>
			</button>
		</li>
	);
};
