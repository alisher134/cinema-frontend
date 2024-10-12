import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ className, children, ...rest }: ButtonProps) => {
	return (
		<button className={clsx(styles.button, className)} {...rest}>
			{children}
		</button>
	);
};
