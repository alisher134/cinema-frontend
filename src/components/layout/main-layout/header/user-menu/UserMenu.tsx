'use client';

import { SkeletonLoader } from '@/components/ui';
import { PUBLIC_PAGES } from '@/shared/config';
import { useProfile } from '@/shared/hooks/useProfile';
import { LucideUserCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './UserMenu.module.scss';

export const UserMenu = () => {
	const { isLoading, avatarPath, username, isLoggedIn } = useProfile();
	return isLoading ? (
		<div className={styles.loader_container}>
			<SkeletonLoader count={1} className={styles.loader} />
		</div>
	) : isLoggedIn ? (
		<Link href={PUBLIC_PAGES.PROFILE.BASE} className={styles.user_menu}>
			<Image
				src={avatarPath || ''}
				width={35}
				height={35}
				alt={username || ''}
				className={styles.avatar}
			/>
			<span className={styles.username}>{username}</span>
		</Link>
	) : (
		<Link href={PUBLIC_PAGES.AUTH.LOGIN} className={styles.link}>
			<LucideUserCircle className={styles.icon} />
		</Link>
	);
};
