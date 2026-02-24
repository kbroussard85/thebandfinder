import { Auth0Client } from "@auth0/nextjs-auth0/server";
import { getAuth0Config } from "./auth0-config";

// No 'runtime = nodejs' export here to stay Edge-compatible
export const auth0 = new Auth0Client(getAuth0Config());
