import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '@platform/env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})
