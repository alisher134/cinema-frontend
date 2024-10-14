import { MenuItem } from './menu-item/MenuItem';
import { IMenu } from './menu.interface';
import styles from './Menu.module.scss';

export const Menu = ({ menu }: { menu: IMenu }) => {
	return (
		<nav className={styles.menu}>
			<ul className={styles.list}>
				{menu.items.map(item => (
					<MenuItem item={item} key={item.link} />
				))}
			</ul>
		</nav>
	);
};
