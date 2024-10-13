import { NO_INDEX_PAGE } from '@/shared/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: '',
	...NO_INDEX_PAGE
};

const AdminPage = () => {
	return <div>AdminPage</div>;
};

export default AdminPage;
