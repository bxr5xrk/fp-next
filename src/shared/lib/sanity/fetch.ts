import { groq } from "next-sanity";
import { client } from "./client";

export function fetch<T = unknown>(query: string): Promise<T> {
    return client.fetch(groq`${query}`);
}