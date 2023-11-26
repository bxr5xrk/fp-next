import { ENV } from "@platform/env";
import { createClient } from "next-sanity";

export const client = createClient({
    projectId: ENV.projectId,
    apiVersion: ENV.apiVersion,
    dataset: ENV.dataset,
    useCdn: ENV.useCdn,
});
