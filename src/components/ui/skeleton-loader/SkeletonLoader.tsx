import Skeleton, { SkeletonProps, SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface SkeletonLoaderProps extends SkeletonProps {}

export const SkeletonLoader = ({ ...rest }: SkeletonLoaderProps) => {
	return (
		<SkeletonTheme baseColor='#1d2027' highlightColor='#292c37'>
			<Skeleton {...rest} />
		</SkeletonTheme>
	);
};
