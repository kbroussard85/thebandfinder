// Comprehensive fallback for Vercel and local environments
export const getAppBaseUrl = () => {
    const url = process.env.AUTH0_BASE_URL ||
        process.env.APP_BASE_URL ||
        (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : null) ||
        (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null) ||
        'http://localhost:3000';

    return url.startsWith('http') ? url : `https://${url}`;
};

export const getAuth0Config = () => ({
    domain: process.env.AUTH0_DOMAIN || '',
    clientId: process.env.AUTH0_CLIENT_ID || '',
    clientSecret: process.env.AUTH0_CLIENT_SECRET || '',
    secret: process.env.AUTH0_SECRET || '',
    appBaseUrl: getAppBaseUrl(),
    routes: {
        login: '/auth/login',
        logout: '/auth/logout',
        callback: '/auth/callback',
    }
});
