import { type SchemaTypeDefinition } from 'sanity';
import { documents } from './schemas/documents';
import { common } from './schemas/common';
import { pages } from './schemas/pages';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    ...documents,
    ...common,
    ...pages
  ],
};
