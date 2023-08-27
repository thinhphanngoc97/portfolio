'use client';
import { DesignShot } from '@/components/DesignShot';
import { Work } from '@/components/Work';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='pb-20 lg:pb-40 container mx-auto px-4'>
      <div
        className='lg:mt-40 text-lg md:text-3xl lg:text-5xl'
        style={{ fontFamily: 'Panchang-Regular' }}
      >
        <p>
          HI
          <Image
            className='inline mx-3 lg:mx-5 mb-3'
            alt='smile'
            src='/icon_smile.svg'
            width={44}
            height={44}
          />
          I&apos;M{' '}
          <span style={{ fontFamily: 'Panchang-Semibold' }}>HAN DOAN</span>
        </p>
        <p className='lg:mt-6 lg:ml-24'>
          <Image
            className='inline mr-3 lg:mr-5 mb-3'
            alt='star'
            src='/icon_star.svg'
            width={44}
            height={44}
          />
          A{' '}
          <span
            className='rounded-full border-solid border px-3 py-2 lg:px-6 lg:py-3 border-white whitespace-nowrap'
            style={{ fontFamily: 'Panchang-Semibold' }}
          >
            UX/UI DESIGNER
          </span>
        </p>
        <p className='lg:mt-6 lg:ml-12'>
          <Image
            className='inline mr-3 lg:mr-5 mb-3'
            alt='location'
            src='/icon_location.svg'
            width={44}
            height={44}
          />
          BASED IN{' '}
          <span style={{ fontFamily: 'Panchang-Semibold' }}>
            HO CHI MINH CITY, VIETNAM
          </span>
        </p>
      </div>
      <div className='py-2 px-3 mt-10 border-solid border-white border border-x-0'>
        I CREATE USER INTERFACES THAT BALANCE AESTHETICS, FUNCTIONALITY AND
        USABILITY.
      </div>
      <div className='mt-20 lg:mt-40'>
        <div className='text-xl lg:text-3xl font-semibold'>SELECTED WORK</div>
        <Work />
        <DesignShot />
      </div>
    </div>
  );
}
