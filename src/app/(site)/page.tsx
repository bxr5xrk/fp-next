import { HomePage } from '@/router/home/home-page';

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function Page(props: Props): JSX.Element {
  const { searchParams } = props;

  return (<HomePage searchParams={searchParams} />);
}
