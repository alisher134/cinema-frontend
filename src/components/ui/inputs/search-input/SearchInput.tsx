import { LucideSearch } from 'lucide-react';
import { ChangeEvent, InputHTMLAttributes } from 'react';
import styles from './SearchInput.module.scss';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
	searchTerm: string;
	handleSearchTerm: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput = ({
	searchTerm,
	handleSearchTerm,
	...rest
}: SearchInputProps) => {
	return (
		<div className={styles.search_input}>
			<input
				value={searchTerm}
				onChange={handleSearchTerm}
				type='text'
				className={styles.input}
				{...rest}
			/>

			<button className={styles.button}>
				<LucideSearch className={styles.icon} />
			</button>
		</div>
	);
};
