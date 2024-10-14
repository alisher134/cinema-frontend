import { MenuContainer } from './menu-container/MenuContainer';
import styles from './Sidebar.module.scss';

export const Sidebar = () => {
	return (
		<aside className={styles.sidebar}>
			<MenuContainer />
		</aside>
	);
};
