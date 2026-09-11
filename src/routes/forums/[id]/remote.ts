import {form,query} from "$app/server";
import * as v from "valibot";

let messages: Record<string, string[]> = {};

export const getMessages = query(v.string(), (id) => {
    // TODO: return messages[id]
    // TODO: handle what you should do if messages[id] is undefined
    if(messages[id] !== undefined)
        return messages[id];
    else messages[id] = [];

    return messages[id]
});
export const createMessage = form(
    v.object({
        message: v.string(),
        id: v.string(),
    }),
    ({ id, message }) => {
    // TODO: add message to array of messages for messages[id]
    // TODO: handle the case where messages[id] is null (set it to an empty array)
        if(messages[id] == null)
            messages[id] = [];
        messages[id].push(message)
    },
);