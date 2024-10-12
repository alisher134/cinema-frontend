import { zodResolver } from '@hookform/resolvers/zod';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { EnumAuthType, IFormValues } from './auth.interface';
import { authSchema } from './auth.schema';

export function useAuth() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const type = (searchParams.get('type') ?? EnumAuthType.LOGIN) as EnumAuthType;

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString());
			params.set(name, value);
			return params.toString();
		},
		[searchParams]
	);

	const setType = (value: string) => {
		router.push(pathname + '?' + createQueryString('type', value));
	};

	const {
		register: registerInput,
		formState: { errors }
	} = useForm<IFormValues>({
		resolver: zodResolver(authSchema),
		mode: 'onChange'
	});

	return { registerInput, errors, type, setType };
}
