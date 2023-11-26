import '../globals.css';
import { Inter } from 'next/font/google';
import { cl } from '@/shared/lib';
import { Header } from '../../widgets/header';
import { Footer } from '../../widgets/footer';

const inter = Inter({ subsets: ['cyrillic'] });

export const metadata = {
  title: 'Франківський Паломник',
  description: '#Мизнаємошлях',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="uk"
      suppressHydrationWarning={true}
      className="h-screen min-h-screen w-screen bg-white text-slate-800"
    >
      <body
        suppressHydrationWarning={true}
        className={cl(
          inter.className,
          'flex min-h-screen flex-col mx-auto max-w-7xl p-2 overflow-x-hidden overflow-y-scroll'
        )}
      >
        <Header />

        <main className="w-full h-full p-4 relative flex-grow">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
