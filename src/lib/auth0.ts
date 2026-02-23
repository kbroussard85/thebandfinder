import { Auth0Client } from "@auth0/nextjs-auth0/server";

// Comprehensive fallback for Vercel and local environments
const getAppBaseUrl = () => {
    const url = process.env.AUTH0_BASE_URL ||
        process.env.APP_BASE_URL ||
        (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : null) ||
        (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null) ||
        'http://localhost:3000';

    return url.startsWith('http') ? url : `https://${url}`;
};

const appBaseUrl = getAppBaseUrl();

// Log configuration status (redacted) for production debugging in Vercel records
if (process.env.NODE_ENV === 'production') {
    console.log('[Auth0] Initializing with Base URL:', appBaseUrl);
}

export const auth0 = new Auth0Client({
    domain: process.env.AUTH0_DOMAIN || '',
    clientId: process.env.AUTH0_CLIENT_ID || '',
    clientSecret: process.env.AUTH0_CLIENT_SECRET || '',
    secret: process.env.AUTH0_SECRET || '',
    appBaseUrl,
    routes: {
        login: '/auth/login',
        logout: '/auth/logout',
        callback: '/auth/callback',
    }
});
