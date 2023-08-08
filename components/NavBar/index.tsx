import Link from 'next/link';

export function NavBar() {
  return (
    <>
      <header className='container mx-auto py-8 flex'>
        <Link href={'/'}>HAN DOAN</Link>
        <div className='ml-auto flex gap-10'>
          <Link href={'/'}>WORK</Link>
          <Link href={'/about-me'}>ABOUT</Link>
          <Link href={'/'}>RESUME</Link>
        </div>
      </header>
    </>
  );
}
