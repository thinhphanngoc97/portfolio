import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className='mt-40 text-5xl'>
        <p>
          HI I&apos;M
          <Image
            className='inline ml-4'
            alt='smile'
            src='/icon_smile.svg'
            width={44}
            height={44}
          />
          <span className='font-bold ml-4'>HAN DOAN</span>
        </p>
      </div>
    </>
  );
}
