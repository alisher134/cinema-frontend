'use client';

import { PropsWithChildren } from 'react';
import { Header } from './header/Header';
import styles from './MainLayout.module.scss';
import { Sidebar } from './sidebar/Sidebar';

export const MainLayout = ({ children }: PropsWithChildren) => {
	return (
		<main className={styles.layout}>
			<Header />
			<div className={styles.main}>
				<Sidebar />
				<section className={styles.content}>{children}</section>
			</div>
		</main>
	);
};
