import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className='container mx-auto px-4 relative text-sm lg:text-lg'>
      <Image
        className='absolute -top-8 -left-10'
        alt=''
        src='/icon_star.svg'
        width={44}
        height={44}
      />
      <div className='text-lg lg:text-2xl font-medium border-b border-white pb-10 flex flex-col lg:flex-row items-center justify-between gap-4'>
        LOOKING FOR AN AWESOME GROUP OF PEOPLE TO WORK WITH. FEEL FREE TO REACH
        OUT TO ME.
        <a
          href={'mailto:handoan6299@gmail.com'}
          className='bg-white text-black px-4 py-2 flex items-center rounded-full text-base whitespace-nowrap min-w-fit'
        >
          LET&apos;S CONNECT
          <Image
            className='inline ml-3'
            alt=''
            src='/arrow_right.svg'
            width={26}
            height={18}
          />
        </a>
      </div>
      <div className='py-8 flex flex-col-reverse lg:flex-row gap-4 items-center'>
        <span>Copyright © 2023 Han Doan</span>
        <div className='lg:ml-auto flex gap-5 lg:gap-10 underline font-extralight underline-offset-4'>
          <a href={'mailto:handoan6299@gmail.com'}>Email</a>
          <a target='_blank' href={'https://www.behance.net/handoan6297761'}>
            Behance
          </a>
          <a target='_blank' href={'https://www.linkedin.com/in/handoan62/'}>
            LinkedIn
          </a>
          <a target='_blank' href={'https://dribbble.com/handoan6299'}>
            Dribble
          </a>
        </div>
      </div>
    </footer>
  );
}
