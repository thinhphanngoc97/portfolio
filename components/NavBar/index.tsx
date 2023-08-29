'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavBar() {
  const pathName = usePathname();

  return (
    <header className='container mx-auto py-8 px-4 flex text-sm lg:text-lg'>
      <Link href={'/'}>HAN DOAN</Link>
      <div className='ml-auto flex gap-4 lg:gap-10'>
        <Link
          href={'/work'}
          className={pathName == '/work' ? 'underline underline-offset-4' : ''}
        >
          WORK
        </Link>
        <Link
          href={'/about-me'}
          className={
            pathName == '/about-me' ? 'underline underline-offset-4' : ''
          }
        >
          ABOUT
        </Link>
        <Link target='_blank' href={'/CV_DoanNgocHan_UXUIDesigner.pdf'}>
          RESUME
        </Link>
      </div>
    </header>
  );
}
