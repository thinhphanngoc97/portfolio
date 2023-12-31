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
            TOP MANAGEMENT SYSTEM
          </p>
        </div>
        <div className='mt-4 lg:mt-8'>
          <p className='w-full lg:w-3/5'>
            TMS is a software by TGL Solutions for human resource management
            since 2020. The TMS team improved the interface and functionality
            based on user feedback.
          </p>
        </div>
        <div className='mt-10 lg:mt-20 lg:-mx-14'>
          <Image
            className='inline -z-10 relative w-full object-cover'
            alt='TMS'
            src='/tms/1.svg'
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
            src='/icon_star_5.svg'
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
                Top Management System (TMS) is a human resource management
                software developed by TGL Solutions and deployed internally
                since 2020. To provide the best and most convenient user
                experience, the TMS team has collected feedback from users and
                improved both the interface and the functionality.
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
                    <li>- 10+ months</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='relative'>
        <Image
          className='absolute bottom-0 right-0'
          alt=''
          src='/icon_star_4.svg'
          width={120}
          height={232}
        />
        <div className='container mx-auto px-4 relative py-10 lg:py-20'>
          <Image
            className='absolute top-10 lg:top-20 -left-10'
            alt=''
            src='/icon_star_3.svg'
            width={44}
            height={44}
          />
          <div
            className='text-2xl lg:text-4xl'
            style={{ fontFamily: 'Panchang-Regular' }}
          >
            <p style={{ fontFamily: 'Panchang-Semibold' }}>Key feature</p>
          </div>
          <div className='mt-3 lg:mt-6'>
            <ul className='ml-4 list-disc space-y-2'>
              <li>Track and evaluate employee performance</li>
              <li>Manage payroll and benefits</li>
              <li>Provide online training and development</li>
              <li>
                Collect feedback from users and improve the interface and
                functionality
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='bg-white pt-7 lg:pt-14 pb-5 lg:pb-10 text-black'>
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
            <p style={{ fontFamily: 'Panchang-Semibold' }}>Design System</p>
          </div>
          <div className='mt-3 lg:mt-6'>
            <div className='text-lg lg:text-2xl font-semibold'>COLORS</div>
            <div className='mt-1 text-lg lg:text-xl'>Primary colors</div>
            <div className='mt-2 lg:mt-4'>
              <Image
                className='w-auto h-auto object-cover'
                alt=''
                src='/tms/23.svg'
                width={0}
                height={0}
              />
            </div>
            <div className='mt-10 lg:mt-20 text-lg lg:text-xl'>
              Secondary colors
            </div>
            <div className='mt-2 lg:mt-4'>
              <Image
                className='w-auto h-auto object-cover'
                alt=''
                src='/tms/24.svg'
                width={0}
                height={0}
              />
            </div>
            <div className='mt-10 lg:mt-20 text-lg lg:text-xl'>
              Neutral colors
            </div>
            <div className='mt-2 lg:mt-4'>
              <Image
                className='w-auto h-auto object-cover'
                alt=''
                src='/tms/25.svg'
                width={0}
                height={0}
              />
            </div>
            <div className='mt-10 lg:mt-20 text-lg lg:text-xl'>
              Status colors
            </div>
            <div className='mt-2 lg:mt-4'>
              <Image
                className='w-auto h-auto object-cover'
                alt=''
                src='/tms/26.svg'
                width={0}
                height={0}
              />
            </div>
            <div className='text-lg lg:text-2xl font-semibold mt-10 lg:mt-20'>
              TYPOGRAPHY
            </div>
          </div>
        </div>
      </div>
      <div className='container mx-auto px-4 pt-5 lg:pt-10 pb-10 lg:pb-20'>
        <Image
          className='w-full object-cover'
          alt=''
          src='/tms/27.svg'
          width={0}
          height={0}
        />
      </div>
      <div className='bg-white py-7 lg:py-14 text-black'>
        <div className='container mx-auto px-4'>
          <div className='text-lg lg:text-2xl font-semibold'>ICON</div>
          <div className='flex justify-center'>
            <Image
              className='w-auto object-cover mt-5 lg:mt-10'
              alt=''
              src='/tms/28.svg'
              width={0}
              height={0}
            />
          </div>
          <div className='text-lg lg:text-2xl font-semibold mt-10 lg:mt-20'>
            GRID SYSTEM
          </div>
          <div className='mt-2 text-lg lg:text-xl'>
            Desktop (1280) | 12 columns | 40px Margin | 20px Gutter
          </div>
          <div className='flex justify-center'>
            <Image
              className='w-full object-cover mt-5 lg:mt-10'
              alt=''
              src='/tms/41.svg'
              width={0}
              height={0}
            />
          </div>
          <div className='text-lg lg:text-2xl font-semibold mt-10 lg:mt-20'>
            UI KIT
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-20'>
            <div>
              <div className='text-lg lg:text-xl mt-3 lg:mt-5'>Buttons</div>
              <Image
                className='w-full object-cover mt-3'
                alt=''
                src='/tms/29.svg'
                width={0}
                height={0}
              />
            </div>
            <div>
              <div className='text-lg lg:text-xl mt-3 lg:mt-5'>Sliders</div>
              <Image
                className='w-full object-cover mt-3'
                alt=''
                src='/tms/30.svg'
                width={0}
                height={0}
              />
            </div>
          </div>
          <div className='mt-5 lg:mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-14'>
            <div>
              <div className='text-lg lg:text-xl mt-3 lg:mt-5'>Tags</div>
              <Image
                className='w-full object-cover mt-3'
                alt=''
                src='/tms/31.svg'
                width={0}
                height={0}
              />
            </div>
            <div className='col-span-full lg:col-span-2'>
              <div className='text-lg lg:text-xl mt-3 lg:mt-5'>Text inputs</div>
              <Image
                className='w-full object-cover mt-3'
                alt=''
                src='/tms/32.svg'
                width={0}
                height={0}
              />
            </div>
          </div>
          <div className='mt-5 lg:mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-14'>
            <div className='col-span-full lg:col-span-2'>
              <div className='text-lg lg:text-xl mt-3 lg:mt-5'>Date picker</div>
              <Image
                className='w-full object-cover mt-3'
                alt=''
                src='/tms/33.svg'
                width={0}
                height={0}
              />
            </div>
            <div>
              <div className='text-lg lg:text-xl mt-3 lg:mt-5'>Tabs</div>
              <Image
                className='w-auto object-cover mt-3'
                alt=''
                src='/tms/34.svg'
                width={0}
                height={0}
              />
              <div className='text-lg lg:text-xl mt-8 lg:mt-16'>Tooltips</div>
              <Image
                className='w-auto object-cover mt-3'
                alt=''
                src='/tms/35.svg'
                width={0}
                height={0}
              />
              <div className='text-lg lg:text-xl mt-8 lg:mt-16'>Avatar</div>
              <Image
                className='w-auto object-cover mt-3'
                alt=''
                src='/tms/36.svg'
                width={0}
                height={0}
              />
            </div>
          </div>
          <div className='mt-5 lg:mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-14'>
            <div className='col-span-full lg:col-span-2'>
              <div className='text-lg lg:text-xl mt-3 lg:mt-5'>Menu bar</div>
              <Image
                className='w-full object-cover mt-3'
                alt=''
                src='/tms/37.svg'
                width={0}
                height={0}
              />
            </div>
            <div>
              <div className='text-lg lg:text-xl mt-3 lg:mt-5'>Drop down</div>
              <Image
                className='w-auto object-cover mt-3'
                alt=''
                src='/tms/38.svg'
                width={0}
                height={0}
              />
              <div className='text-lg lg:text-xl mt-8 lg:mt-16'>Checkboxes</div>
              <Image
                className='w-auto object-cover mt-3'
                alt=''
                src='/tms/39.svg'
                width={0}
                height={0}
              />
            </div>
          </div>
        </div>
        <div className='container mx-auto px-4 relative mt-10 lg:mt-20'>
          <Image
            className='absolute top-0 -left-10'
            alt=''
            src='/icon_star_5.svg'
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
              className='w-full object-cover px-20'
              alt=''
              src='/tms/40.svg'
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
            src='/icon_star_5.svg'
            width={44}
            height={44}
          />
          <div
            className='text-2xl lg:text-4xl'
            style={{ fontFamily: 'Panchang-Regular' }}
          >
            <p style={{ fontFamily: 'Panchang-Semibold' }}>USER PAGE</p>
          </div>
          <div className='text-lg lg:text-2xl font-semibold mt-5 lg:mt-10'>
            HOME PAGE AND CHECK-IN/OUT FUNCTION
          </div>
          <div className='mt-3'>
            To make it easy for users to check in/out and choose their absence
            options, we have placed these functions at the top of the page. This
            way, users can see them right away when they open the page. This has
            helped users avoid forgetting to check in/out or clicking the wrong
            button when they work from home, unlike the old version.
          </div>
          <div>
            <Image
              className='w-full object-cover mt-5 lg:mt-10'
              alt=''
              src='/tms/2.svg'
              width={0}
              height={0}
            />
          </div>
          <div className='text-lg lg:text-2xl font-semibold mt-10 lg:mt-20'>
            NOTIFICATIONS
          </div>
          <div className='mt-3'>
            After checking-in, the system will automatically forward to the
            notifications page so that users do not miss new notifications
          </div>
          <div>
            <Image
              className='w-full object-cover mt-5 lg:mt-10'
              alt=''
              src='/tms/3.svg'
              width={0}
              height={0}
            />
          </div>
          <div className='text-lg lg:text-2xl font-semibold mt-10 lg:mt-20'>
            USERS STATUS
          </div>
          <div className='mt-3'>
            To make it easy for users to check in/out and choose their absence
            options, we have placed these functions at the top of the page. This
            way, users can see them right away when they open the page. This has
            helped users avoid forgetting to check in/out or clicking the wrong
            button when they work from home, unlike the old version.
          </div>
          <div>
            <Image
              className='w-full object-cover mt-5 lg:mt-10'
              alt=''
              src='/tms/4.svg'
              width={0}
              height={0}
            />
          </div>
          <div className='text-lg lg:text-2xl font-semibold mt-10 lg:mt-20'>
            WORKING TIME
          </div>
          <div className='mt-3'>
            Core functionalities included: monitor your work hours, submit work
            time adjustments, and verify monthly work hours – all accessible
            from a single interface. Furthermore, users can effortlessly
            establish their upcoming vacation plans and receive notifications
            for subsequent approval by their immediate supervisor.
          </div>
          <div>
            <Image
              className='w-full object-cover mt-5 lg:mt-10'
              alt=''
              src='/tms/5.svg'
              width={0}
              height={0}
            />
          </div>
          <div className='text-lg lg:text-2xl font-semibold mt-10 lg:mt-20'>
            PAYMENT INFO
          </div>
          <div className='mt-3'>
            Incorporation of day-off data tracking and payroll integration.
          </div>
          <div>
            <Image
              className='w-full object-cover mt-5 lg:mt-10'
              alt=''
              src='/tms/6.svg'
              width={0}
              height={0}
            />
            <div className='text-center'>User’s interface</div>
          </div>
          <div className='mt-6 lg:mt-12'>
            <Image
              className='w-full object-cover mt-5 lg:mt-10'
              alt=''
              src='/tms/7.svg'
              width={0}
              height={0}
            />
            <div className='text-center'>Admin’s interface</div>
          </div>
        </div>
      </div>
      <div className='bg-white pb-10 lg:pb-20 text-black'>
        <div className='container mx-auto px-4 relative'>
          <Image
            className='absolute top-0 -left-10'
            alt=''
            src='/icon_star_5.svg'
            width={44}
            height={44}
          />
          <div
            className='text-2xl lg:text-4xl'
            style={{ fontFamily: 'Panchang-Regular' }}
          >
            <p style={{ fontFamily: 'Panchang-Semibold' }}>Speed Flow</p>
          </div>
          <div className='mt-3 lg:mt-6'>
            Incorporation of day-off data tracking and payroll integration.
          </div>
          <div>
            <Image
              className='w-full object-cover mt-5 lg:mt-10'
              alt=''
              src='/tms/8.svg'
              width={0}
              height={0}
            />
          </div>
          <div>
            <Image
              className='w-full object-cover mt-5 lg:mt-10'
              alt=''
              src='/tms/9.svg'
              width={0}
              height={0}
            />
          </div>
        </div>
      </div>
      <div className='bg-white pb-10 lg:pb-20 text-black'>
        <div className='container mx-auto px-4 relative'>
          <Image
            className='absolute top-0 -left-10'
            alt=''
            src='/icon_star_5.svg'
            width={44}
            height={44}
          />
          <div
            className='text-2xl lg:text-4xl'
            style={{ fontFamily: 'Panchang-Regular' }}
          >
            <p style={{ fontFamily: 'Panchang-Semibold' }}>HSMS Page</p>
          </div>
          <div className='mt-3 lg:mt-6'>
            Hardware Software Management System
          </div>
          <div>
            <Image
              className='w-full object-cover mt-5 lg:mt-10'
              alt=''
              src='/tms/10.svg'
              width={0}
              height={0}
            />
          </div>
          <div>
            <Image
              className='w-full object-cover mt-5 lg:mt-10'
              alt=''
              src='/tms/11.svg'
              width={0}
              height={0}
            />
          </div>
          <div>
            <Image
              className='w-full object-cover mt-5 lg:mt-10'
              alt=''
              src='/tms/12.svg'
              width={0}
              height={0}
            />
          </div>
        </div>
      </div>
      <div className='bg-white pb-10 lg:pb-20 text-black'>
        <div className='container mx-auto px-4 relative'>
          <Image
            className='absolute top-0 -left-10'
            alt=''
            src='/icon_star_5.svg'
            width={44}
            height={44}
          />
          <div
            className='text-2xl lg:text-4xl'
            style={{ fontFamily: 'Panchang-Regular' }}
          >
            <p style={{ fontFamily: 'Panchang-Semibold' }}>PPM Page</p>
          </div>
          <div className='mt-3 lg:mt-6'>
            Trang quản lý mục tiêu của toàn công ty
          </div>
          <div>
            <Image
              className='w-full object-cover mt-5 lg:mt-10'
              alt=''
              src='/tms/13.svg'
              width={0}
              height={0}
            />
          </div>
          <div>
            <Image
              className='w-full object-cover mt-5 lg:mt-10'
              alt=''
              src='/tms/14.svg'
              width={0}
              height={0}
            />
          </div>
        </div>
      </div>
      <div className='bg-white pb-10 lg:pb-20 text-black'>
        <div className='container mx-auto px-4 relative'>
          <Image
            className='absolute top-0 -left-10'
            alt=''
            src='/icon_star_5.svg'
            width={44}
            height={44}
          />
          <div
            className='text-2xl lg:text-4xl'
            style={{ fontFamily: 'Panchang-Regular' }}
          >
            <p style={{ fontFamily: 'Panchang-Semibold' }}>Recruitment Page</p>
          </div>
          <div className='text-lg lg:text-2xl font-semibold mt-5 lg:mt-10'>
            JOB LIST
          </div>
          <div className='mt-3'>Page showing all vacancies</div>
          <div>
            <Image
              className='w-full object-cover mt-5 lg:mt-10'
              alt=''
              src='/tms/15.svg'
              width={0}
              height={0}
            />
          </div>
          <div className='text-lg lg:text-2xl font-semibold mt-10 lg:mt-20'>
            CANDIDATE MANAGEMENT
          </div>
          <div className='mt-3'>
            The candidate management page is conveniently segmented into five
            user-friendly stages: CV Review, Interviews, Evaluations, Offers,
            and TGL First Day. Notably, employers can efficiently communicate
            with multiple candidates via email within each stage using the
            system.
          </div>
          <div>
            <Image
              className='w-full object-cover mt-5 lg:mt-10'
              alt=''
              src='/tms/16.svg'
              width={0}
              height={0}
            />
          </div>
          <div>
            <Image
              className='w-full object-cover mt-5 lg:mt-10'
              alt=''
              src='/tms/17.svg'
              width={0}
              height={0}
            />
          </div>
          <div>
            <Image
              className='w-full object-cover mt-5 lg:mt-10'
              alt=''
              src='/tms/18.svg'
              width={0}
              height={0}
            />
          </div>
          <div>
            <Image
              className='w-full object-cover mt-5 lg:mt-10'
              alt=''
              src='/tms/19.svg'
              width={0}
              height={0}
            />
          </div>
          <div className='text-lg lg:text-2xl font-semibold mt-10 lg:mt-20'>
            EMAIL TEMPLATES
          </div>
          <div className='mt-3'>
            Furthermore, the system provides users with the capability to
            effortlessly craft a set of highly convenient and user-friendly
            email templates.
          </div>
          <div>
            <Image
              className='w-full object-cover mt-5 lg:mt-10'
              alt=''
              src='/tms/20.svg'
              width={0}
              height={0}
            />
          </div>
          <div>
            <Image
              className='w-full object-cover mt-5 lg:mt-10'
              alt=''
              src='/tms/21.svg'
              width={0}
              height={0}
            />
          </div>
        </div>
      </div>
      <div className='bg-white pb-16 lg:pb-32 text-black'>
        <div className='container mx-auto px-4 relative'>
          <Image
            className='absolute top-0 -left-10'
            alt=''
            src='/icon_star_5.svg'
            width={44}
            height={44}
          />
          <div
            className='text-2xl lg:text-4xl'
            style={{ fontFamily: 'Panchang-Regular' }}
          >
            <p style={{ fontFamily: 'Panchang-Semibold' }}>
              User’s Information
            </p>
          </div>
          <div>
            <Image
              className='w-full object-cover mt-5 lg:mt-10'
              alt=''
              src='/tms/22.svg'
              width={0}
              height={0}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
