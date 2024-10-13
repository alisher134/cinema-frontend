import { jwtVerify } from 'jose';
import { NextRequest, NextResponse } from 'next/server';
import { ADMIN_PAGES, PUBLIC_PAGES } from './shared/config';
import {
	EnumTokens,
	ITokenInside
} from './shared/services/auth/auth.interface';
import { AuthService } from './shared/services/auth/auth.service';
import { EnumUserRole } from './shared/types/user.types';

export async function middleware(request: NextRequest) {
	const JWT_SECRET = process.env.JWT_SECRET;
	let accessToken = request.cookies.get(EnumTokens.ACCESS_TOKEN)?.value;
	const refreshToken = request.cookies.get(EnumTokens.REFRESH_TOKEN)?.value;

	const isAdminPage = request.url.includes(ADMIN_PAGES.HOME);

	if (!refreshToken) {
		request.cookies.delete(EnumTokens.ACCESS_TOKEN);
		return handleRedirect(isAdminPage, request);
	}

	if (!accessToken) {
		try {
			const response =
				await AuthService.getNewTokensWithRefreshToken(refreshToken);
			accessToken = response.accessToken;
		} catch {
			request.cookies.delete(EnumTokens.ACCESS_TOKEN);
			return handleRedirect(isAdminPage, request);
		}
	}

	try {
		const { payload }: { payload: ITokenInside } = await jwtVerify(
			accessToken,
			new TextEncoder().encode(JWT_SECRET)
		);

		if (payload.role === EnumUserRole.ADMIN) return NextResponse.next();

		if (isAdminPage) return handleRedirect(isAdminPage, request);

		return NextResponse.next();
	} catch (error) {
		if (
			error instanceof Error &&
			error.message.includes('exp claim timestamp check failed')
		) {
			return handleRedirect(isAdminPage, request);
		}

		return handleRedirect(isAdminPage, request);
	}
}

export const config = {
	matcher: ['/admin/:path*', '/profile/:path*']
};

export const handleRedirect = (isAdminPage: boolean, request: NextRequest) => {
	return isAdminPage
		? NextResponse.rewrite(new URL('/404', request.url))
		: NextResponse.redirect(new URL(PUBLIC_PAGES.AUTH.LOGIN, request.url));
};
