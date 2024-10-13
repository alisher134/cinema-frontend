import { useQuery } from '@tanstack/react-query';
import { UserService } from '../services/user.service';
import { transformUserToState } from '../utils/transform-user-to-state';

export function useProfile() {
	const { data: profile, isLoading } = useQuery({
		queryKey: ['get profile'],
		queryFn: () => UserService.getProfile(),
		select: ({ data }) => data,
		refetchInterval: 1800000
	});

	const userState = profile ? transformUserToState(profile) : null;

	return {
		isLoading,
		...profile,
		...userState
	};
}
