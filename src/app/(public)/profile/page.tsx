import { NO_INDEX_PAGE } from '@/shared/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Профиль',
	...NO_INDEX_PAGE
};

const ProfilePage = () => {
	return <div>ProfilePage</div>;
};

export default ProfilePage;
