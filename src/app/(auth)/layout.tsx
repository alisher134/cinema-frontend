import { PropsWithChildren, Suspense } from 'react';
import styles from './layout.module.scss';

const AuthLayout = ({ children }: PropsWithChildren) => {
	return (
		<Suspense>
			<main className={styles.layout}>{children}</main>
		</Suspense>
	);
};

export default AuthLayout;
