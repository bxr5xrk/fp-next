import { ENV } from '@platform/env';
import createImageUrlBuilder from '@sanity/image-url';
import type { Image } from 'sanity';

const imageBuilder = createImageUrlBuilder({
  projectId: ENV.projectId || '',
  dataset: ENV.dataset || '',
});

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto('format').fit('max');
};
