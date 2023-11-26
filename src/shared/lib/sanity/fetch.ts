import { QueryParams, groq } from "next-sanity";
import { client } from "./client";

export function fetch<T = unknown>(query: string, params?: QueryParams): Promise<T> {
    return client.fetch(groq`${query}`, params);
}