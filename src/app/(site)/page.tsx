import { HomePage } from '@/router/home/home-page';
import { Metadata } from 'next';

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export const metadata: Metadata = {
  metadataBase: new URL("https://fp.if.ua"),
  title: "Франківський Паломник",
  description: "Наші паломництва - це не лише відвідання цікавих місць",
  keywords: "паломництво, паломник, паломництва, паломництво зі Львова, паломництво з Івано-Франківська, паломництво з України, паломництво зі Львова, паломництво з Івано-Франківська, паломництво з України, паломництво зі Львова, паломництво з Івано-Франківська, паломництво з України, паломництво зі Львова, паломництво з Івано-Франківська, паломництво з України, паломництво зі Львова, паломництво з Івано-Франківська, паломництво з України, паломництво зі Львова, паломництво з Івано-Франківська, паломництво з України, паломництво зі Львова, паломництво з Івано-Франківська, паломництво з України",
  openGraph: {
    title: "Франківський Паломник",
    description: "Наші паломництва - це не лише відвідання цікавих місць",
    images: [
        {
            url: "/logo.png",
            width: 40,
            height: 40,
            alt: "Франківський Паломник",
        },
    ],
}
};

export default function Page(props: Props): JSX.Element {
  const { searchParams } = props;

  return (<HomePage searchParams={searchParams} />);
}
