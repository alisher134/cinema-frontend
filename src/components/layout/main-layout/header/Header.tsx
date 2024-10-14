'use client';

import { Logo } from '@/components/ui';
import { LucideMenu, LucideX } from 'lucide-react';
import { useState } from 'react';
import styles from './Header.module.scss';
import { Search } from './search/Search';
import { UserMenu } from './user-menu/UserMenu';

export const Header = () => {
	const [isActive, setIsActive] = useState(true);

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.left}>
					<button
						onClick={() => setIsActive(!isActive)}
						className={styles.menu_button}
					>
						{isActive ? (
							<LucideMenu className={styles.icon} />
						) : (
							<LucideX className={styles.icon} />
						)}
					</button>
					<Logo />
				</div>

				<Search />

				<UserMenu />
			</div>
		</header>
	);
};
