'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { useRef } from 'react';
import Link from 'next/link';
import { Navigation } from 'swiper/modules';

export default function ProjectLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);

  return (
    <div className='pt-10 lg:pt-20 pb-20 lg:pb-40'>
      {children}
      <div className='container px-4 mx-auto'>
        <div className='flex flex-wrap items-center gap-5 lg:gap-10'>
          <div className='text-lg lg:text-2xl'> RELATED WORK</div>
          <div className='flex gap-3'>
            <button
              ref={navigationPrevRef}
              className='border border-white px-4 py-3 flex items-center w-fit rounded-full'
            >
              <Image
                className='inline mr-3'
                alt=''
                src='/arrow_left_white.svg'
                width={26}
                height={18}
              />
              PREV
            </button>
            <button
              ref={navigationNextRef}
              className='border border-white px-4 py-3 flex items-center w-fit rounded-full'
            >
              NEXT
              <Image
                className='inline ml-3'
                alt=''
                src='/arrow_right_white.svg'
                width={26}
                height={18}
              />
            </button>
          </div>
        </div>
        <Swiper
          className='mt-12'
          modules={[Navigation]}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current
          }}
          onSwiper={(swiper: any) => {
            setTimeout(() => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;

              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
          spaceBetween={35}
          breakpoints={{
            0: {
              slidesPerView: 1
            },
            768: {
              slidesPerView: 1.5
            },
            1024: {
              slidesPerView: 2.5
            }
          }}
        >
          <SwiperSlide>
            <div className='border border-white rounded-lg overflow-hidden'>
              <Image
                alt=''
                src='/order_cake.svg'
                width={0}
                height={0}
                className='w-full h-[250px] object-cover'
              />
              <div className='px-5 py-8'>
                <div
                  className='text-lg lg:text-2xl'
                  style={{ fontFamily: 'Panchang-Regular' }}
                >
                  <p style={{ fontFamily: 'Panchang-Semibold' }}>SUGARLAND</p>
                </div>
                <div className='mt-2'>
                  A system to tackle motorbike parking problem in Vietnam
                </div>
                <Link
                  href={''}
                  className=' bg-white text-black px-4 py-2 flex items-center w-fit rounded-full mt-6'
                >
                  VIEW CASE
                  <Image
                    className='inline ml-3'
                    alt=''
                    src='/arrow_right.svg'
                    width={26}
                    height={18}
                  />
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='border border-white rounded-lg overflow-hidden'>
              <Image
                alt=''
                src='/order_cake.svg'
                width={0}
                height={0}
                className='w-full h-[250px] object-cover'
              />
              <div className='px-5 py-8'>
                <div
                  className='text-lg lg:text-2xl'
                  style={{ fontFamily: 'Panchang-Regular' }}
                >
                  <p style={{ fontFamily: 'Panchang-Semibold' }}>SUGARLAND</p>
                </div>
                <div className='mt-2'>
                  A system to tackle motorbike parking problem in Vietnam
                </div>
                <Link
                  href={''}
                  className=' bg-white text-black px-4 py-2 flex items-center w-fit rounded-full mt-6'
                >
                  VIEW CASE
                  <Image
                    className='inline ml-3'
                    alt=''
                    src='/arrow_right.svg'
                    width={26}
                    height={18}
                  />
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='border border-white rounded-lg overflow-hidden'>
              <Image
                alt=''
                src='/order_cake.svg'
                width={0}
                height={0}
                className='w-full h-[250px] object-cover'
              />
              <div className='px-5 py-8'>
                <div
                  className='text-lg lg:text-2xl'
                  style={{ fontFamily: 'Panchang-Regular' }}
                >
                  <p style={{ fontFamily: 'Panchang-Semibold' }}>SUGARLAND</p>
                </div>
                <div className='mt-2'>
                  A system to tackle motorbike parking problem in Vietnam
                </div>
                <Link
                  href={''}
                  className=' bg-white text-black px-4 py-2 flex items-center w-fit rounded-full mt-6'
                >
                  VIEW CASE
                  <Image
                    className='inline ml-3'
                    alt=''
                    src='/arrow_right.svg'
                    width={26}
                    height={18}
                  />
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='border border-white rounded-lg overflow-hidden'>
              <Image
                alt=''
                src='/order_cake.svg'
                width={0}
                height={0}
                className='w-full h-[250px] object-cover'
              />
              <div className='px-5 py-8'>
                <div
                  className='text-lg lg:text-2xl'
                  style={{ fontFamily: 'Panchang-Regular' }}
                >
                  <p style={{ fontFamily: 'Panchang-Semibold' }}>SUGARLAND</p>
                </div>
                <div className='mt-2'>
                  A system to tackle motorbike parking problem in Vietnam
                </div>
                <Link
                  href={''}
                  className=' bg-white text-black px-4 py-2 flex items-center w-fit rounded-full mt-6'
                >
                  VIEW CASE
                  <Image
                    className='inline ml-3'
                    alt=''
                    src='/arrow_right.svg'
                    width={26}
                    height={18}
                  />
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='border border-white rounded-lg overflow-hidden'>
              <Image
                alt=''
                src='/order_cake.svg'
                width={0}
                height={0}
                className='w-full h-[250px] object-cover'
              />
              <div className='px-5 py-8'>
                <div
                  className='text-lg lg:text-2xl'
                  style={{ fontFamily: 'Panchang-Regular' }}
                >
                  <p style={{ fontFamily: 'Panchang-Semibold' }}>SUGARLAND</p>
                </div>
                <div className='mt-2'>
                  A system to tackle motorbike parking problem in Vietnam
                </div>
                <Link
                  href={''}
                  className=' bg-white text-black px-4 py-2 flex items-center w-fit rounded-full mt-6'
                >
                  VIEW CASE
                  <Image
                    className='inline ml-3'
                    alt=''
                    src='/arrow_right.svg'
                    width={26}
                    height={18}
                  />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}