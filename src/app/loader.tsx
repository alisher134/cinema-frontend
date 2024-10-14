import { LucideLoader } from 'lucide-react';
import styles from './loader.module.scss';

const LoaderPage = () => {
	return (
		<div className={styles.loader}>
			<LucideLoader className={styles.icon} />
		</div>
	);
};

export default LoaderPage;
