'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function SugarLand() {
  const [persona, setPersona] = useState(1);

  return (
    <div className='pb-10 lg:pb-20 overflow-hidden'>
      <div className='container mx-auto px-4'>
        <div
          className='lg:mt-20 text-lg md:text-4xl lg:text-5xl flex-1'
          style={{ fontFamily: 'Panchang-Regular' }}
        >
          <p style={{ fontFamily: 'Panchang-Semibold' }}>
            TGL SOLUTIONS WEBSITE
          </p>
        </div>
        <div className='mt-4 lg:mt-8'>
          <p className='w-full lg:w-3/5'>
            A website selling cakes with the feature of decorating cakes
            according to your request, with a minimalist style interface,
            elegant and eye-catching
          </p>
        </div>
        <div className='mt-10 lg:mt-20 lg:-mx-14'>
          <Image
            className='inline -z-10 relative w-full object-cover'
            alt='TMS'
            src='/tgl/1.svg'
            width={0}
            height={0}
          />
        </div>
      </div>
      <div className='-mt-0.5 bg-white py-10 lg:py-20 text-black'>
        <div className='container mx-auto px-4 relative'>
          <Image
            className='absolute top-0 -left-10'
            alt=''
            src='/icon_star_3.svg'
            width={44}
            height={44}
          />
          <div
            className='text-2xl lg:text-4xl'
            style={{ fontFamily: 'Panchang-Regular' }}
          >
            <p style={{ fontFamily: 'Panchang-Semibold' }}>Project Overview</p>
          </div>
          <div className='flex flex-col lg:flex-row mt-5 lg:mt-10 gap-5 lg:gap-20'>
            <div className='basis-1 lg:basis-2/3'>
              <div className='font-semibold text-lg lg:text-2xl'>
                ABOUT THE PROJECT
              </div>
              <div className='mt-3'>
                Created a new and exciting brand identity for the company and
                website that reflects its youthful and fun spirit. The main goal
                is to attract and recruit talented people who want to work in a
                vibrant and dynamic environment. The website helps to increase
                credibility, from which customers have trusted and cooperated
                with the company to implement large projects.
              </div>
            </div>
            <div className='basis-1 lg:basis-1/3'>
              <div className='font-semibold text-lg lg:text-2xl'>WHAT I DO</div>
              <div className='mt-3'>
                <ul>
                  <li>- Brand Identity</li>
                  <li>- Character Design</li>
                  <li>- UX/UI Design</li>
                  <li>- Prototyping</li>
                </ul>
              </div>
              <div className='mt-5'>
                <div className='font-semibold text-lg lg:text-2xl'>
                  PROJECT DURATION
                </div>
                <div className='mt-3'>
                  <ul>
                    <li>- 4 months</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white pb-10 lg:pb-20 text-black'>
        <div className='container mx-auto px-4 relative'>
          <Image
            className='absolute top-0 -left-10'
            alt=''
            src='/icon_star_3.svg'
            width={44}
            height={44}
          />
          <div
            className='text-2xl lg:text-4xl'
            style={{ fontFamily: 'Panchang-Regular' }}
          >
            <p style={{ fontFamily: 'Panchang-Semibold' }}>Brand Identity</p>
          </div>
          <div className='text-lg lg:text-2xl font-semibold mt-5 lg:mt-10'>
            LOGO
          </div>
          <div className='mt-3'>
            Logo is a combination of penguin image and sustainable circular
            symbol. Penguins are animals that are not afraid of difficulties,
            challenges and ready to dive into the ocean to find food. When there
            is a brave penguin leading, there will be a flock following. TGL
            Solutions uses the image of penguins to express the spirit of not
            being afraid of change, daring to innovate and pioneer in the field
            of information technology. The image of “arrow pointing up” means
            the desire for the company to grow stronger and stronger in the
            future.
          </div>
          <div>
            <Image
              className='w-full object-cover mt-5 lg:mt-10'
              alt=''
              src='/tgl/2.svg'
              width={0}
              height={0}
            />
          </div>
          <div className='text-lg lg:text-2xl font-semibold mt-12 lg:mt-28'>
            COLORS & TYPOGRAPHY
          </div>
          <div>
            <Image
              className='w-full object-cover mt-3 lg:mt-6'
              alt=''
              src='/tgl/3.svg'
              width={0}
              height={0}
            />
          </div>
          <div className='mt-10 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20'>
            <div>
              <div className='text-lg lg:text-2xl font-semibold'>MASCOT</div>
              <div className='mt-3'>
                As stated, we need to create a character that can act as a
                friendly guide for the child during their learning journey.
                Since the app teaches English through stories, we came up with
                the idea of a personified book that has cheerful and adorable
                expressions.
              </div>
            </div>
            <div>
              <Image
                className='w-full object-cover'
                alt=''
                src='/tgl/4.svg'
                width={0}
                height={0}
              />
            </div>
          </div>
          <div>
            <Image
              className='w-full object-cover mt-5 lg:mt-10'
              alt=''
              src='/tgl/5.svg'
              width={0}
              height={0}
            />
          </div>
        </div>
      </div>
      <div className='bg-white py-10 lg:py-20 text-black'>
        <div className='container mx-auto px-4 relative'>
          <Image
            className='absolute top-0 -left-10'
            alt=''
            src='/icon_star_3.svg'
            width={44}
            height={44}
          />
          <div
            className='text-2xl lg:text-4xl'
            style={{ fontFamily: 'Panchang-Regular' }}
          >
            <p style={{ fontFamily: 'Panchang-Semibold' }}>
              Information Architecture
            </p>
          </div>
          <div className='px-16'>
            <Image
              className='w-full object-cover mt-10 lg:mt-20'
              alt=''
              src='/tgl/6.svg'
              width={0}
              height={0}
            />
          </div>
        </div>
      </div>
      <div className='py-10 lg:py-20'>
        <div className='container mx-auto px-4 relative'>
          <Image
            className='absolute top-0 -left-10'
            alt=''
            src='/icon_star_3.svg'
            width={44}
            height={44}
          />
          <div
            className='text-2xl lg:text-4xl'
            style={{ fontFamily: 'Panchang-Regular' }}
          >
            <p style={{ fontFamily: 'Panchang-Semibold' }}>Website design</p>
          </div>
          <div className='mt-3 lg:mt-6'>HOME PAGE</div>
          <div>
            <Image
              className='w-full object-cover mt-3 lg:mt-6'
              alt=''
              src='/tgl/7.svg'
              width={0}
              height={0}
            />
          </div>
        </div>
      </div>
      <div className='bg-white py-10 lg:py-20 text-black'>
        <div className='container mx-auto px-4 relative'>
          <div className='font-semibold'>ABOUT US</div>
          <div>
            <Image
              className='w-full object-cover mt-5 lg:mt-10'
              alt=''
              src='/tgl/8.svg'
              width={0}
              height={0}
            />
          </div>
        </div>
      </div>
      <div className='py-10 lg:py-20'>
        <div className='container mx-auto px-4 relative'>
          <div className='font-semibold'>HUMAN</div>
          <div>
            <Image
              className='w-full object-cover mt-5 lg:mt-10'
              alt=''
              src='/tgl/9.svg'
              width={0}
              height={0}
            />
          </div>
        </div>
      </div>
      <div className='bg-white py-10 lg:py-20 text-black'>
        <div className='container mx-auto px-4 relative'>
          <div className='font-semibold'>PROJECT</div>
          <div>
            <Image
              className='w-full object-cover mt-5 lg:mt-10'
              alt=''
              src='/tgl/10.svg'
              width={0}
              height={0}
            />
          </div>
        </div>
      </div>
      <div className='py-10 lg:py-20'>
        <div className='container mx-auto px-4 relative'>
          <div className='font-semibold'>CAREERS</div>
          <div>
            <Image
              className='w-full object-cover mt-5 lg:mt-10'
              alt=''
              src='/tgl/11.svg'
              width={0}
              height={0}
            />
          </div>
        </div>
      </div>
      <div className='bg-white py-10 lg:py-20 text-black'>
        <div className='container mx-auto px-4 relative'>
          <div className='font-semibold'>PROJECT</div>
          <div>
            <Image
              className='w-full object-cover mt-5 lg:mt-10'
              alt=''
              src='/tgl/12.svg'
              width={0}
              height={0}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
