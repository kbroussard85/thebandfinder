import { NextResponse, type NextRequest } from "next/server";
import { auth0 } from "./lib/auth0";

export const runtime = 'nodejs';

export async function middleware(request: NextRequest) {
    try {
        if (request.nextUrl.pathname === '/auth/login') {
            const screen_hint = request.nextUrl.searchParams.get('screen_hint');
            const targetRole = request.nextUrl.searchParams.get('targetRole');

            const response = await auth0.startInteractiveLogin({
                authorizationParameters: {
                    screen_hint: screen_hint || undefined,
                    targetRole: (targetRole as string) || undefined,
                }
            });

            if (targetRole) {
                response.cookies.set('targetRole', targetRole, {
                    path: '/',
                    maxAge: 60 * 10, // 10 minutes
                    httpOnly: true,
                    sameSite: 'lax'
                });
            }

            return response;
        }

        const response = await auth0.middleware(request);

        // After a successful Auth0 callback, we intercept the redirect to / or returnTo
        if (request.nextUrl.pathname === '/auth/callback' && response.status === 302) {
            const targetRole = request.cookies.get('targetRole')?.value;
            if (targetRole) {
                const redirectUrl = targetRole === 'venue' ? '/onboarding/venue' : '/onboarding/artist';
                const newResponse = NextResponse.redirect(new URL(redirectUrl, request.url));

                // Critical: Pass through session cookies set by Auth0
                response.cookies.getAll().forEach(cookie => {
                    newResponse.cookies.set(cookie.name, cookie.value, {
                        path: cookie.path,
                        domain: cookie.domain,
                        expires: cookie.expires,
                        httpOnly: cookie.httpOnly,
                        maxAge: cookie.maxAge,
                        sameSite: cookie.sameSite,
                        secure: cookie.secure
                    });
                });

                // Clean up tracking cookie
                newResponse.cookies.delete('targetRole');
                return newResponse;
            }
        }

        return response;
    } catch (error: any) {
        console.error('Middleware Auth error:', error);
        return NextResponse.next();
    }
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         */
        "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"
    ]
};
