import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function CRMLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="uk"
      suppressHydrationWarning={true}
      className="h-screen min-h-screen w-screen"
    >
      <body
        className='min-h-screen'
        suppressHydrationWarning={true}
      >
        <main className="w-full h-full">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
