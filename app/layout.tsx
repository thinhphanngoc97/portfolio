import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Han Doan's portfolio",
  description: "Step right into Han Doan's portfolio."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <meta
        property='og:image'
        content='https://handoan.vercel.app/about_me.svg'
      />
      <body className={inter.className}>
        <NavBar />
        <main className='text-sm lg:text-lg'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
