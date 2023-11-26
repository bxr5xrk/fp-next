import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from '@platform/env';

export const client = createClient({
    projectId,
    apiVersion,
    dataset,
    useCdn: true,
});
