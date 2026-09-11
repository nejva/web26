import {form,query} from "$app/server";
import * as v from "valibot";

let forums : {name: string}[] = [];

export const getForums = query(()=>forums);
export const addForums = form(
    v.object({
        name: v.pipe(v.string()),
    }),
    async({name}) =>{
        forums.push({name});
    },
); 
export const deleteForums = form(
    v.object({
        id: v.pipe(v.string(),v.nonEmpty()),
    }),
    async({id})=>{
        forums = forums.filter((forum)=> forum.name != id)
    },
);