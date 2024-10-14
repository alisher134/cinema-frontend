import { MainLayout } from '@/components/layout';
import { PropsWithChildren } from 'react';

const PublicLayout = ({ children }: PropsWithChildren) => {
	return <MainLayout>{children}</MainLayout>;
};

export default PublicLayout;
