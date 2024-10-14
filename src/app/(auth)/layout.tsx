import { PUBLIC_PAGES } from '@/shared/config';
import { getServerAuth } from '@/shared/utils';
import { redirect } from 'next/navigation';
import { PropsWithChildren, Suspense } from 'react';
import styles from './layout.module.scss';

const AuthLayout = async ({ children }: PropsWithChildren) => {
	const user = await getServerAuth();

	if (user?.isLoggedIn) return redirect(PUBLIC_PAGES.HOME.BASE);

	return (
		<Suspense fallback={false}>
			<main className={styles.layout}>{children}</main>
		</Suspense>
	);
};

export default AuthLayout;
