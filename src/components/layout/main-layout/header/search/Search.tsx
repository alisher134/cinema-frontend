import { SearchInput } from '@/components/ui/inputs';
import { ChangeEvent, useState } from 'react';

export const Search = () => {
	const [searchTerm, setSearchTerm] = useState('');

	const handleSearchTerm = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	return (
		<div>
			<SearchInput
				searchTerm={searchTerm}
				handleSearchTerm={handleSearchTerm}
				placeholder='Поиск...'
			/>
		</div>
	);
};
