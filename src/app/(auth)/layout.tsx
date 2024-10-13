import { PUBLIC_PAGES } from '@/shared/config';
import { redirect } from 'next/navigation';
import { PropsWithChildren, Suspense } from 'react';
import styles from './layout.module.scss';
import { getServerAuth } from '@/shared/utils';

const AuthLayout = async ({ children }: PropsWithChildren) => {
	const user = await getServerAuth();

	if (user?.isLoggedIn) return redirect(PUBLIC_PAGES.HOME);

	return (
		<Suspense>
			<main className={styles.layout}>{children}</main>
		</Suspense>
	);
};

export default AuthLayout;
