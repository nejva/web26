import {form,getRequestEvent} from "$app/server";
import {redirect} from "@sveltejs/kit";
import * as v from "valibot";


export const login = form(
    v.object({
        username: v.string(),
        password: v.string(),
            }),
        ({ username, password }) => {
            // TODO: här ska du stoppa koden som kollar om man ska bli inloggad
            if(username=="arne" && password=="1111"){
                const { cookies } = getRequestEvent();
                cookies.set("logged_in", "yep", { path: "/", httpOnly: true });
                redirect(303, "/");
            }
        },
);