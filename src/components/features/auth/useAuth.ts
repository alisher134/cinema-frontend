import { errorCatch } from '@/api';
import { PUBLIC_PAGES } from '@/shared/config';
import { AuthService } from '@/shared/services/auth/auth.service';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { EnumAuthType, IFormValues } from './auth.interface';
import { authSchema } from './auth.schema';

export function useAuth() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<IFormValues>({
		resolver: zodResolver(authSchema),
		mode: 'onChange'
	});

	const { mutateAsync: authMutate, isPending } = useMutation({
		mutationKey: ['authentication'],
		mutationFn: (data: IFormValues) => AuthService.auth(type, data),
		onSuccess() {
			setErrorMessage(null);
			router.push(PUBLIC_PAGES.HOME.BASE);
			reset();
		},
		onError(error) {
			setErrorMessage(errorCatch(error));
		}
	});

	const handleClick: SubmitHandler<IFormValues> = data => {
		authMutate(data);
	};

	return {
		registerInput,
		errors,
		type,
		setType,
		handleSubmit,
		handleClick,
		errorMessage,
		isPending
	};
}
