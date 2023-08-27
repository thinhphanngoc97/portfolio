'use client';
import { DesignShot } from '@/components/DesignShot';
import { Work } from '@/components/Work';
import Image from 'next/image';

export default function SelectedWork() {
  return (
    <div className='lg:mt-20 pb-20 lg:pb-40 container mx-auto px-4'>
      <div
        className='text-lg md:text-3xl lg:text-5xl flex-1'
        style={{ fontFamily: 'Panchang-Semibold' }}
      >
        <p>
          SELECTED
          <Image
            className='inline mx-3 xl:mx-5 mb-3'
            alt='star'
            src='/icon_star.svg'
            width={44}
            height={44}
          />
          <span className='rounded-full border-solid border px-3 py-2 xl:px-6 xl:py-3 border-white whitespace-nowrap'>
            WORK
          </span>
        </p>
      </div>
      <div className='lg:mt-28'>
        <Work />
        <DesignShot />
      </div>
    </div>
  );
}
