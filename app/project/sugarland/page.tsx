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
          <p style={{ fontFamily: 'Panchang-Semibold' }}>SUGARLAND</p>
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
            alt='Sugarland'
            src='/work/sugarland.svg'
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
            src='/icon_star_2.svg'
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
                The goal of this project is to create a website for a bakery
                that sells both traditional and customized cakes, as well as
                shares cake recipes with its customers. The website will offer a
                variety of bakery products and a user-friendly purchasing
                experience. It will also enable customers to learn how to make
                their own delicious cakes at home. By combining customization
                with recipe sharing, the website aims to appeal to a broad
                customer base and become a favorite online destination for cake
                lovers and baking enthusiasts.
                <br /> Team strength 3 members: Han Doan, Jay Tran, Minh Dan
              </div>
            </div>
            <div className='basis-1 lg:basis-1/3'>
              <div className='font-semibold text-lg lg:text-2xl'>WHAT I DO</div>
              <div className='mt-3'>
                <ul>
                  <li>- User research</li>
                  <li>- UX/UI Design</li>
                  <li>- Copywriting</li>
                  <li>- Prototyping</li>
                </ul>
              </div>
              <div className='mt-5'>
                <div className='font-semibold text-lg lg:text-2xl'>
                  PROJECT DURATION
                </div>
                <div className='mt-3'>
                  <ul>
                    <li>- 6 weeks (2 UX - 4 UI)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container mx-auto px-4 relative my-10 lg:my-20'>
        <Image
          className='absolute top-0 -left-10'
          alt=''
          src='/icon_star_2.svg'
          width={44}
          height={44}
        />
        <div
          className='text-2xl lg:text-4xl'
          style={{ fontFamily: 'Panchang-Regular' }}
        >
          <p style={{ fontFamily: 'Panchang-Semibold' }}>User Research</p>
        </div>
        <div className='font-semibold mt-5 lg:mt-10 text-lg lg:text-2xl'>
          QUANTITATIVE RESEARCH
        </div>
        <div className='mt-3'>Conducted an online survey among 297 people</div>
        <Image
          alt=''
          src='/sugarland/1.svg'
          width={0}
          height={0}
          className='mt-10 w-full object-cover'
        />
        <div className='font-semibold mt-7 lg:mt-14 text-lg lg:text-2xl'>
          QUALITATIVE RESEARCH
        </div>
        <div className='mt-4'>
          <ul className='list-decimal ml-6 space-y-2'>
            <li>
              Are you looking for a website to order cakes online? What are some
              features that you look for in a good website?
            </li>
            <li>
              How often do you buy cakes online? What are the occasions that you
              usually order cakes for?
            </li>
            <li>
              What are the most important factors for you when choosing a
              website to buy cakes from? Is it the price, the quality, the
              variety, the delivery time, or something else?
            </li>
            <li>
              Do you have any favorite websites or brands that you trust and
              recommend for buying cakes online? What do you like about them?
            </li>
            <li>
              How do you ensure the quality and freshness of the cakes that you
              buy online? Do you check the reviews, ratings, or feedback from
              other customers?
            </li>
            <li>Have you ever tried baking your own cakes? How did it go?</li>
            <li>
              How do you deal with the delivery and payment issues when buying
              cakes online? Do you prefer cash on delivery, online payment, or
              other methods?
            </li>
          </ul>
        </div>
      </div>
      <div className='bg-white pt-10 lg:pt-20 text-black'>
        <div className='container mx-auto px-4 relative'>
          <Image
            className='absolute top-0 -left-10'
            alt=''
            src='/icon_star_2.svg'
            width={44}
            height={44}
          />
          <div
            className='text-2xl lg:text-4xl'
            style={{ fontFamily: 'Panchang-Regular' }}
          >
            <p style={{ fontFamily: 'Panchang-Semibold' }}>
              Competitor Analysis
            </p>
          </div>
          <div className='mt-4'>
            Goals: comparison about the purchasing experience of new users and
            returning users
          </div>
          <div>
            <Image
              alt=''
              src='/sugarland/2.svg'
              width={0}
              height={0}
              className='mt-6 w-full object-cover inline-block -mb-20 lg:-mb-40'
            />
          </div>
        </div>
      </div>
      <div className='container mx-auto mt-20 px-4 pt-10 lg:pt-40 pb-10 lg:pb-20'>
        <div className='text-lg lg:text-2xl font-semibold'>SUMMARY</div>
        <div className='mt-3'>
          <ul className='pl-8 list-disc space-y-1'>
            <li>
              Does not sell products online or provide essential information
              about cakes.
            </li>
            <li>
              Does not have price information, a loyalty program, online
              ordering, or a customer feedback section.
            </li>
          </ul>
        </div>
        <div className='text-lg lg:text-2xl font-semibold mt-10'>
          PAIN POINT
        </div>
        <div className='mt-3'>
          <ul className='pl-8 list-disc space-y-1'>
            <li>No cake health info (nutrition, ingredients, allergens)</li>
            <li>Online ordering (ahead or delivery) not available for cakes</li>
            <li>Customers get no loyalty or rewards benefits</li>
            <li>Customer feedback or review section missing</li>
          </ul>
        </div>
      </div>
      <div className='bg-white py-10 lg:py-20 text-black'>
        <div className='container mx-auto px-4 relative'>
          <Image
            className='absolute top-0 -left-10'
            alt=''
            src='/icon_star_2.svg'
            width={44}
            height={44}
          />
          <div
            className='text-2xl lg:text-4xl'
            style={{ fontFamily: 'Panchang-Regular' }}
          >
            <p style={{ fontFamily: 'Panchang-Semibold' }}>Personas</p>
          </div>
          <div className='mt-6 lg:mt-12 grid grid-cols-2 gap-8'>
            <div>
              <Image
                className='w-full object-cover'
                alt=''
                src='/sugarland/3.svg'
                width={0}
                height={0}
              />
            </div>
            <div>
              <Image
                className='w-full object-cover'
                alt=''
                src='/sugarland/4.svg'
                width={0}
                height={0}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white pt-4 lg:pt-8 pb-7 lg:pb-14 text-black'>
        <div className='container mx-auto px-4 relative'>
          <Image
            className='absolute top-0 -left-10'
            alt=''
            src='/icon_star_2.svg'
            width={44}
            height={44}
          />
          <div
            className='text-2xl lg:text-4xl'
            style={{ fontFamily: 'Panchang-Regular' }}
          >
            <p style={{ fontFamily: 'Panchang-Semibold' }}>Empathy Map</p>
          </div>
          <div className='flex items-center gap-8 text-base lg:text-xl font-semibold mt-4 lg:mt-8'>
            <div
              className={`cursor-pointer ${
                persona !== 1 ? 'text-gray-500' : ''
              }`}
              onClick={() => setPersona(1)}
            >
              PERSONA 1
            </div>
            <div
              className={`cursor-pointer ${
                persona !== 2 ? 'text-gray-500' : ''
              }`}
              onClick={() => setPersona(2)}
            >
              PERSONA 2
            </div>
          </div>
          <div className='mt-5 lg:mt-10'>
            <Image
              className='w-full object-cover'
              alt=''
              src={`/sugarland/${persona === 1 ? '5' : '6'}.svg`}
              width={0}
              height={0}
            />
          </div>
        </div>
      </div>
      <div className='bg-white py-7 lg:py-14 text-black'>
        <div className='container mx-auto px-4 relative'>
          <Image
            className='absolute top-0 -left-10'
            alt=''
            src='/icon_star_2.svg'
            width={44}
            height={44}
          />
          <div
            className='text-2xl lg:text-4xl'
            style={{ fontFamily: 'Panchang-Regular' }}
          >
            <p style={{ fontFamily: 'Panchang-Semibold' }}>User Journey Map</p>
          </div>
          <div className='flex items-center gap-8 text-base lg:text-xl font-semibold mt-4 lg:mt-8'>
            PERSONA: BEN
          </div>
          <div className='mt-2'>
            Goal: Ordering cake conveniently and affordably online, as a married
            lawyer.
          </div>
          <div className='mt-8'>
            <Image
              className='w-full object-cover'
              alt=''
              src='/sugarland/7.svg'
              width={0}
              height={0}
            />
          </div>
        </div>
      </div>
      <div className='bg-white py-7 lg:py-14 text-black'>
        <div className='container mx-auto px-4 relative'>
          <Image
            className='absolute top-0 -left-10'
            alt=''
            src='/icon_star_2.svg'
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
          <div className='mt-8 lg:mt-16'>
            <Image
              className='w-full object-cover'
              alt=''
              src='/sugarland/8.svg'
              width={0}
              height={0}
            />
          </div>
        </div>
      </div>
      <div className='bg-white py-7 lg:py-14 text-black'>
        <div className='container mx-auto px-4 relative'>
          <Image
            className='absolute top-0 -left-10'
            alt=''
            src='/icon_star_2.svg'
            width={44}
            height={44}
          />
          <div
            className='text-2xl lg:text-4xl'
            style={{ fontFamily: 'Panchang-Regular' }}
          >
            <p style={{ fontFamily: 'Panchang-Semibold' }}>Main Userflow</p>
          </div>
          <div className='mt-8 lg:mt-16'>
            <Image
              className='w-full object-cover'
              alt=''
              src='/sugarland/9.svg'
              width={0}
              height={0}
            />
          </div>
        </div>
      </div>
      <div className='container mx-auto px-4 my-10 lg:my-20 relative'>
        <Image
          className='absolute top-0 -left-10'
          alt=''
          src='/icon_star_2.svg'
          width={44}
          height={44}
        />
        <div
          className='text-2xl lg:text-4xl'
          style={{ fontFamily: 'Panchang-Regular' }}
        >
          <p style={{ fontFamily: 'Panchang-Semibold' }}>Wireframe</p>
        </div>
        <div className='mt-5 lg:mt-10'>
          <Image
            className='w-full object-cover'
            alt=''
            src='/sugarland/10.svg'
            width={0}
            height={0}
          />
        </div>
      </div>
      <div className='bg-white py-10 lg:py-20 text-black'>
        <div className='container mx-auto px-4 relative'>
          <Image
            className='absolute top-0 -left-10'
            alt=''
            src='/icon_star_2.svg'
            width={44}
            height={44}
          />
          <div
            className='text-2xl lg:text-4xl'
            style={{ fontFamily: 'Panchang-Regular' }}
          >
            <p style={{ fontFamily: 'Panchang-Semibold' }}>Branding</p>
          </div>
          <div className='mt-8 lg:mt-16'>
            <Image
              className='w-full object-cover'
              alt=''
              src='/sugarland/11.svg'
              width={0}
              height={0}
            />
          </div>
        </div>
      </div>
      <div className='bg-[#FEF3ED] pt-10 lg:pt-20 text-black'>
        <div className='container mx-auto px-4 relative'>
          <Image
            className='absolute top-0 -left-10'
            alt=''
            src='/icon_star_2.svg'
            width={44}
            height={44}
          />
          <div
            className='text-2xl lg:text-4xl'
            style={{ fontFamily: 'Panchang-Regular' }}
          >
            <p style={{ fontFamily: 'Panchang-Semibold' }}>
              Sugarland Walkthrough
            </p>
          </div>
          <div>
            <Image
              className='w-full object-cover'
              alt=''
              src='/sugarland/12.svg'
              width={0}
              height={0}
            />
          </div>
          <div>
            <Image
              className='w-full object-cover'
              alt=''
              src='/sugarland/13.svg'
              width={0}
              height={0}
            />
          </div>
          <div>
            <Image
              className='w-full object-cover'
              alt=''
              src='/sugarland/14.svg'
              width={0}
              height={0}
            />
          </div>
          <div>
            <Image
              className='w-full object-cover'
              alt=''
              src='/sugarland/15.svg'
              width={0}
              height={0}
            />
          </div>
          <div>
            <Image
              className='w-full object-cover'
              alt=''
              src='/sugarland/16.svg'
              width={0}
              height={0}
            />
          </div>
          <div>
            <Image
              className='w-full object-cover'
              alt=''
              src='/sugarland/17.svg'
              width={0}
              height={0}
            />
          </div>
        </div>
      </div>
      <div>
        <div className='container mx-auto px-4'>
          <Image
            className='w-full object-cover rounded-2xl'
            alt=''
            src='/sugarland/18.svg'
            width={0}
            height={0}
          />
        </div>
      </div>
    </div>
  );
}
