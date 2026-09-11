import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load = (async ({ cookies, url }) => {
    // TODO: redirecta användaren till /login om logged_in-cookien inte är satt
    // och url.pathname inte redan är '/login'
    let logged_in = cookies.get("logged_in");
    if (!logged_in && url.pathname != "/login") redirect(303, "/login");
}) satisfies LayoutServerLoad;