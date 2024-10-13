'use server';

import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { EnumTokens, ITokenInside } from '../services/auth/auth.interface';
import { AuthService } from '../services/auth/auth.service';
import { transformUserToState } from './transform-user-to-state';

export async function getServerAuth() {
	const JWT_SECRET = process.env.JWT_SECRET;
	let accessToken = cookies().get(EnumTokens.ACCESS_TOKEN)?.value;
	const refreshToken = cookies().get(EnumTokens.REFRESH_TOKEN)?.value;

	if (!refreshToken) return null;

	if (!accessToken) {
		try {
			const response =
				await AuthService.getNewTokensWithRefreshToken(refreshToken);
			accessToken = response.accessToken;
		} catch {
			return null;
		}
	}

	try {
		const { payload }: { payload: ITokenInside } = await jwtVerify(
			accessToken,
			new TextEncoder().encode(JWT_SECRET)
		);

		if (!payload) return null;

		return transformUserToState(payload);
	} catch {
		return null;
	}
}
