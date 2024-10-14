'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IMenuItem } from '../menu.interface';
import styles from './MenuItem.module.scss';

export const MenuItem = ({ item }: { item: IMenuItem }) => {
	const pathname = usePathname();
	return (
		<li
			className={clsx(styles.item, {
				[styles.active]: pathname === item.link
			})}
		>
			<Link href={item.link} className={styles.link}>
				<item.icon className={styles.icon} />
				<span className={styles.name}>{item.name}</span>
			</Link>
		</li>
	);
};
