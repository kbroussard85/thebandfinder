import { Auth0Client } from "@auth0/nextjs-auth0/server";

export const runtime = 'nodejs';

// Fallback for Vercel environments
const getAppBaseUrl = () => {
    if (process.env.AUTH0_BASE_URL) return process.env.AUTH0_BASE_URL;
    if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
    return 'http://localhost:3000';
};

const appBaseUrl = getAppBaseUrl();

// Basic validation for critical production environment variables
if (process.env.NODE_ENV === 'production') {
    if (!process.env.AUTH0_DOMAIN) console.warn('Missing AUTH0_DOMAIN');
    if (!process.env.AUTH0_SECRET) console.warn('Missing AUTH0_SECRET');
}

export const auth0 = new Auth0Client({
    domain: process.env.AUTH0_DOMAIN,
    clientId: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    secret: process.env.AUTH0_SECRET,
    appBaseUrl,
    routes: {
        login: '/auth/login',
        logout: '/auth/logout',
        callback: '/auth/callback',
    }
});
