import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Dashapp',
    default: 'Dashapp',
  },
  keywords: ["react", "next.js", "Diego Neves", "vercel"],
  authors: [
    {
      name: "Diego Neves",
      url: "https://www.linkedin.com/in/diego-jco-neves/"
    }
  ],
  description: 'This is the study case of Diego Neves, brought to you by Vercel.',
  metadataBase: new URL('https://github.com/diegojcn/nextjs-dashboard-app'),
};
export type Author = {
  url?: string | URL;
  name?: string;
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter?.className} antialiased`}>{children}</body>
    </html>
  );
}
