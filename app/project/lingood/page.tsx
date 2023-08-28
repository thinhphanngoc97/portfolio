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
          <p style={{ fontFamily: 'Panchang-Semibold' }}>LINGOOD</p>
        </div>
        <div className='mt-4 lg:mt-8'>
          <p className='w-full lg:w-3/5'>
            LINGOOD is a fun app for kids (6-12) to learn English with
            interactive books and games. Cute Bookie friends help learners form
            learning habits with tasks and challenges.
          </p>
        </div>
        <div className='mt-10 lg:mt-20 lg:-mx-14'>
          <Image
            className='inline -z-10 relative w-full object-cover'
            alt='Lingood'
            src='/lingood.svg'
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
                LINGOOD is an app for learning English through interactive books
                and games for kids from 6 to 12 years old. The lessons are
                arranged by topics and levels from easy to hard to suit each
                learner’s path. Build listening-speaking-reading skills every
                day with lessons embedded in fun simulation games. The app helps
                learners easily form learning habits through tasks, challenges,
                and reminders from cute Bookie friends. This way, learning
                English becomes fun and exciting for the kids.
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
                    <li>- 24 weeks (2 UX - 20 UI)</li>
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
          src='/icon_star_3.svg'
          width={44}
          height={44}
        />
        <div
          className='text-2xl lg:text-4xl'
          style={{ fontFamily: 'Panchang-Regular' }}
        >
          <p style={{ fontFamily: 'Panchang-Semibold' }}>User Research</p>
        </div>
        <div className='flex items-center gap-8 text-base lg:text-xl font-semibold mt-4 lg:mt-8'>
          <div
            className={`cursor-pointer ${persona !== 1 ? 'text-gray-500' : ''}`}
            onClick={() => setPersona(1)}
          >
            CHILDREN
          </div>
          <div
            className={`cursor-pointer ${persona !== 2 ? 'text-gray-500' : ''}`}
            onClick={() => setPersona(2)}
          >
            PARENTS
          </div>
        </div>
        <div className='mt-2'>Conducted an online survey among 10 people</div>
        <div className='mt-5 lg:mt-10'>
          <Image
            className='w-full object-cover'
            alt=''
            src={`/lingood/${persona === 1 ? '1' : '2'}.svg`}
            width={0}
            height={0}
          />
        </div>
      </div>
      <div className='bg-white pt-10 lg:pt-20 text-black'>
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
              src='/lingood/3.svg'
              width={0}
              height={0}
              className='mt-6 w-full object-cover inline-block'
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
            <p style={{ fontFamily: 'Panchang-Semibold' }}>Personas</p>
          </div>
          <div className='mt-6 lg:mt-12 grid grid-cols-2 gap-8'>
            <div>
              <Image
                className='w-full object-cover'
                alt=''
                src='/lingood/4.svg'
                width={0}
                height={0}
              />
            </div>
            <div>
              <Image
                className='w-full object-cover'
                alt=''
                src='/lingood/5.svg'
                width={0}
                height={0}
              />
            </div>
          </div>
          <div className='mt-5 lg:mt-10 text-lg lg:text-2xl font-semibold'>
            SUMMARY
          </div>
          <div className='mt-3'>
            <ul className='pl-8 list-disc space-y-1'>
              <li>
                Both personas are people who interested in learning English by
                apps and have the ability to use technology devices at a good
                level.
              </li>
              <li>Difference from family economical condition.</li>
              <li>
                For children, they find joy in learning . The bright colors and
                funny images stimulate their visual and exploratory senses.
              </li>
              <li>
                For parents, they care about fostering their children’s interest
                in learning a new language . The lessons are short, learning
                time is not too long but effective and does not affect to the
                children’s vision.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='bg-white py-5 lg:py-10 text-black'>
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
            <p style={{ fontFamily: 'Panchang-Semibold' }}>User Journey Map</p>
          </div>
          <div className='flex items-center gap-8 text-base lg:text-xl font-semibold mt-4 lg:mt-8'>
            PERSONA: NGAN HA
          </div>
          <div className='mt-2'>
            Goal: Ordering cake conveniently and affordably online, as a married
            lawyer.
          </div>
          <div className='mt-8'>
            <Image
              className='w-full object-cover'
              alt=''
              src='/lingood/6.svg'
              width={0}
              height={0}
            />
          </div>
        </div>
      </div>
      <div className='bg-white pt-5 lg:pt-10 pb-10 lg:pb-20 text-black'>
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
            <p style={{ fontFamily: 'Panchang-Semibold' }}>Solutions</p>
          </div>
          <div className='mt-3 lg:mt-5'>
            After reviewing the research materials and conducting user surveys,
            I identified the user pain points when using the product and
            suggested the following solutions.
          </div>
          <div className='mt-5 lg:mt-10'>
            <Image
              className='w-full object-cover'
              alt=''
              src='/lingood/7.svg'
              width={0}
              height={0}
            />
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
          <div className='mt-4 lg:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-10'>
            <div>
              <ul className='ml-4 list-disc space-y-2'>
                <li>Lesson content: topics about life around</li>
                <li>
                  Games, challenges: review vocabulary, practice English skills.
                </li>
                <li>
                  The learning path is designed through the form of unlocking.
                </li>
                <li>There is AI voice analysis.</li>
                <li>The text is displayed according to the voice.</li>
              </ul>
            </div>
            <div>
              <ul className='ml-4 list-disc space-y-2'>
                <li>Introduce vocabulary by touch interaction feature.</li>
                <li>Bookie character accompanies the child.</li>
                <li>Tasks and challenges are updated every day.</li>
                <li>Rewards in the form of encrypted money.</li>
                <li>Time limit for use within 15-20 minutes.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white py-7 lg:py-14 text-black'>
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
          <div className='mt-8 lg:mt-16'>
            <Image
              className='w-full object-cover'
              alt=''
              src='/lingood/8.svg'
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
            src='/icon_star_3.svg'
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
              src='/lingood/9.svg'
              width={0}
              height={0}
            />
          </div>
        </div>
      </div>
      <div className='bg-white pt-7 lg:pt-14 pb-10 lg:pb-32 text-black'>
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
            <p style={{ fontFamily: 'Panchang-Semibold' }}>Hi-fi Wireframe</p>
          </div>
          <div className='mt-8 lg:mt-16'>
            <Image
              className='w-full object-cover'
              alt=''
              src='/lingood/10.svg'
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
          src='/icon_star_3.svg'
          width={44}
          height={44}
        />
        <div
          className='text-2xl lg:text-4xl'
          style={{ fontFamily: 'Panchang-Regular' }}
        >
          <p style={{ fontFamily: 'Panchang-Semibold' }}>
            Name and idea orientation
          </p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 mt-3 lg:mt-6'>
          <div>
            <div className='text-lg lg:text-2xl'>NAME</div>
            <div className='mt-8'>
              The brand name “Lingood” is derived from the words “Lingo”
              (meaning a foreign language) and “good” (meaning excellent or
              beneficial). It reflects the aspiration to enhance one’s English
              abilities by using the app.
            </div>
            <div className='text-lg lg:text-2xl mt-10 lg:mt-20'>MOODBOARD</div>
            <div className='mt-8'>
              Beautiful and lively images in the story help children feel
              interested in reading the story, understand the content of the
              story accurately.
              <br />
              <br />
              The app uses the concept of a book world with a map that has a
              pleasant interface and is designed to reflect the four seasons:
              spring, summer, autumn, and winter.
            </div>
          </div>
          <div>
            <div className='mt-8 lg:mt-16 border border-white rounded-lg flex items-center justify-around p-8 text-2xl lg:text-4xl'>
              <span>Lingo</span>
              <span>+</span>
              <span>good</span>
              <span>=</span>
              <span>Lingood</span>
            </div>
            <div className='mt-10 lg:mt-20'>
              <Image
                className='w-full object-cover'
                alt=''
                src='/lingood/12.svg'
                width={0}
                height={0}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white py-10 lg:py-20 text-black'>
        <div className='container mx-auto px-4 relative'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-20'>
            <div>
              <div className='text-lg lg:text-2xl font-semibold'>MASCOT</div>
              <div className='mt-6'>
                As stated, we need to create a character that can act as a
                friendly guide for the child during their learning journey.
                Since the app teaches English through stories, we came up with
                the idea of a personified book that has cheerful and adorable
                expressions.
              </div>
            </div>
            <div>
              <Image
                className='inline-block w-full object-cover'
                alt=''
                src='/lingood/13.svg'
                width={0}
                height={0}
              />
            </div>
          </div>
          <div className='mt-10 lg:mt-20'>
            <Image
              className='inline-block w-full object-cover'
              alt=''
              src='/lingood/14.svg'
              width={0}
              height={0}
            />
          </div>
          <div className='text-lg lg:text-2xl font-semibold mt-10 lg:mt-32'>
            LOGO
          </div>
          <div className='mt-5 lg:mt-10'>
            <Image
              className='inline-block w-full object-cover'
              alt=''
              src='/lingood/15.svg'
              width={0}
              height={0}
            />
          </div>
          <div className='text-lg lg:text-2xl font-semibold mt-10 lg:mt-32'>
            COLORS & TYPOGRAPHY
          </div>
          <div className='mt-5 lg:mt-10'>
            <Image
              className='inline-block w-full object-cover'
              alt=''
              src='/lingood/16.svg'
              width={0}
              height={0}
            />
          </div>
        </div>
      </div>
      <div className='bg-[#F8F3FF] pt-5 lg:pt-10 pb-10 lg:pb-20 text-black'>
        <div className='container mx-auto px-4 relative'>
          <div className='text-lg lg:text-2xl font-semibold'>ICON</div>
          <div>
            <Image
              className='w-full object-cover mt-5 lg:mt-10'
              alt=''
              src='/lingood/17.svg'
              width={0}
              height={0}
            />
          </div>
        </div>
      </div>
      <div className='bg-white py-10 lg:py-20 text-black'>
        <div className='container mx-auto px-4 relative'>
          <div
            className='text-2xl lg:text-4xl'
            style={{ fontFamily: 'Panchang-Regular' }}
          >
            <p style={{ fontFamily: 'Panchang-Semibold' }}>Full App Demo</p>
          </div>
        </div>
      </div>
      <div className='bg-[#F8F3FF] text-black'>
        <div className='container mx-auto px-4 relative'>
          <div>
            <Image
              className='w-full object-cover'
              alt=''
              src='/lingood/18.svg'
              width={0}
              height={0}
            />
          </div>
          <div>
            <Image
              className='w-full object-cover'
              alt=''
              src='/lingood/19.gif'
              width={0}
              height={0}
            />
          </div>
          <div>
            <Image
              className='w-full object-cover'
              alt=''
              src='/lingood/20.svg'
              width={0}
              height={0}
            />
          </div>
          <div>
            <Image
              className='w-full object-cover'
              alt=''
              src='/lingood/21.svg'
              width={0}
              height={0}
            />
          </div>
          <div>
            <Image
              className='w-full object-cover'
              alt=''
              src='/lingood/22.gif'
              width={0}
              height={0}
            />
          </div>
          <div>
            <Image
              className='w-full object-cover'
              alt=''
              src='/lingood/23.gif'
              width={0}
              height={0}
            />
          </div>
          <div>
            <Image
              className='w-full object-cover'
              alt=''
              src='/lingood/24.svg'
              width={0}
              height={0}
            />
          </div>
          <div>
            <Image
              className='w-full object-cover -mt-1'
              alt=''
              src='/lingood/25.gif'
              width={0}
              height={0}
            />
          </div>
          <div>
            <Image
              className='w-full object-cover -mt-1'
              alt=''
              src='/lingood/26.svg'
              width={0}
              height={0}
            />
          </div>
          <div>
            <Image
              className='w-full object-cover -mt-1'
              alt=''
              src='/lingood/27.svg'
              width={0}
              height={0}
            />
          </div>
          <div>
            <Image
              className='w-full object-cover -mt-1'
              alt=''
              src='/lingood/28.gif'
              width={0}
              height={0}
            />
          </div>
          <div>
            <Image
              className='w-full object-cover -mt-1'
              alt=''
              src='/lingood/29.svg'
              width={0}
              height={0}
            />
          </div>
          <div>
            <Image
              className='w-full object-cover -mt-1'
              alt=''
              src='/lingood/30.svg'
              width={0}
              height={0}
            />
          </div>
        </div>
      </div>
      <div>
        <div className='container mx-auto px-4 py-10 lg:py-20'>
          <div>
            <div
              className='text-2xl lg:text-4xl'
              style={{ fontFamily: 'Panchang-Regular' }}
            >
              <p style={{ fontFamily: 'Panchang-Semibold' }}>Landing Page</p>
            </div>
          </div>
          <div className='mt-3 lg:mt-6'>
            I also design the landing page to promote this app. Inspired by
            Apple, it has the parallax effect, on-scroll 3D animation with some
            funny but meaningful content to raise people&apos;s awareness about
            the negative effects of E-waste.
          </div>
          <Image
            className='w-full object-cover mt-5'
            alt=''
            src='/lingood/31.svg'
            width={0}
            height={0}
          />
          <div
            className='text-2xl lg:text-4xl mt-12 lg:mt-32'
            style={{ fontFamily: 'Panchang-Regular' }}
          >
            <p style={{ fontFamily: 'Panchang-Semibold' }}>Credits</p>
          </div>
          <div className='mt-3'>
            <ul className='pl-8 list-disc space-y-1'>
              <li>Mentor: Nguyen Duc Son</li>
              <li>UX/UI Designer: Han Doan</li>
              <li>Animation Designer: Nguyen Nhu Dang - Han Doan</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
