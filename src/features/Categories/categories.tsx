import sanity from '@/shared/lib/sanity';
import { CategoryList } from './components/category-list';

export async function Categories(): Promise<JSX.Element> {
  const data = await getData();

  return (
    <CategoryList categories={data} />
  );
}

interface Category {
  name: string;
  slug: string;
}

async function getData(): Promise<Category[]> {
  const data = await sanity.fetch<Category[]>(`*[_type == "category"] {
    name,
    "slug": slug.current
  }`);

  return data;
}
