import { SkeletonLoader } from '@/components/ui/skeleton-loader/SkeletonLoader';
import { ADMIN_PAGES } from '@/shared/config';
import { useProfile } from '@/shared/hooks/useProfile';
import { LucideSettings2 } from 'lucide-react';
import { Menu } from './menu/Menu';
import { LogoutButton } from './menu/menu-item/logout-button/LogoutButton';
import { MenuItem } from './menu/menu-item/MenuItem';
import { authMenu, firstMenu, secondMenu, userMenu } from './menu/menu.data';
import styles from './MenuContainer.module.scss';

export const MenuContainer = () => {
	const { isLoggedIn, isLoading, isAdmin } = useProfile();
	return (
		<div className={styles.menu_container}>
			<Menu menu={firstMenu} />
			<Menu menu={secondMenu} />

			{isLoading ? (
				<div className={styles.loader_container}>
					<SkeletonLoader height={30} count={4} className={styles.loader} />
				</div>
			) : isLoggedIn ? (
				<>
					<Menu menu={userMenu} />

					{isAdmin && (
						<div style={{ marginTop: '25px' }}>
							<MenuItem
								item={{
									name: 'Админ панель',
									link: ADMIN_PAGES.HOME,
									icon: LucideSettings2
								}}
							/>
						</div>
					)}
					<LogoutButton />
				</>
			) : (
				<Menu menu={authMenu} />
			)}
		</div>
	);
};
