import { PUBLIC_PAGES } from '@/shared/config';
import { SITE_NAME, SITE_TITLE } from '@/shared/constants';
import { LucideClapperboard } from 'lucide-react';
import Link from 'next/link';
import styles from './Logo.module.scss';

export const Logo = () => {
	return (
		<Link href={PUBLIC_PAGES.HOME.BASE} className={styles.logo}>
			<LucideClapperboard className={styles.icon} />

			<div className={styles.info}>
				<span className={styles.title}>{SITE_TITLE}</span>
				<span className={styles.name}>{SITE_NAME}</span>
			</div>
		</Link>
	);
};
