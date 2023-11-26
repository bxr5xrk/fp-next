import { ENV } from '@platform/env';
import { createClient } from 'next-sanity';

export const client = createClient({
  apiVersion: ENV.apiVersion,
  dataset: ENV.dataset,
  projectId: ENV.projectId,
  useCdn: ENV.useCdn,
});
