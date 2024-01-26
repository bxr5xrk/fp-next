/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy';

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works

import { schema } from './sanity/schema';
import { ENV } from '@platform/env';

export default defineConfig({
  basePath: '/studio',
  projectId: ENV.projectId,
  dataset: ENV.dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    structureTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: ENV.apiVersion }),
    vercelDeployTool(),
  ],
});
