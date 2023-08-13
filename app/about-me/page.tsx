import Image from 'next/image';
import Link from 'next/link';

export default function AboutMe() {
  return (
    <div className='pb-20 lg:pb-40'>
      <div className='lg:mt-20 flex flex-col lg:flex-row gap-5'>
        <div
          className='text-lg md:text-3xl lg:text-5xl flex-1'
          style={{ fontFamily: 'Panchang-Regular' }}
        >
          <p style={{ fontFamily: 'Panchang-Semibold' }}>THINGS</p>
          <p className='lg:mt-8'>
            <Image
              className='inline mr-3 xl:mr-5 mb-3'
              alt='star'
              src='/icon_star.svg'
              width={44}
              height={44}
            />
            <span
              className='rounded-full border-solid border px-3 py-2 xl:px-6 xl:py-3 border-white whitespace-nowrap'
              style={{ fontFamily: 'Panchang-Semibold' }}
            >
              ABOUT ME
            </span>
          </p>
          <div className='w-full md:w-2/3 mt-6 lg:mt-12 mx-auto'>
            <Image
              className='inline'
              alt='About me'
              src='/about_me.svg'
              width={0}
              height={0}
              style={{ width: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
        <div className='lg:mt-14 flex-1'>
          <p>
            ‍Hello, I&apos;m Han Doan, a designer with an edge of UI/UX design
            based in Ho Chi Minh city, Vietnam. I have a degree in Graphic
            Designer from the University of Architecture HCMC. <br />
            <br />
            I&apos;m currently a UX/UI designer at TGL Solutions. My past
            experiences include working as a Graphic Designer at an agency and a
            local streetwear shop.
            <br />
            <br /> I am passionate about designing technology that enhances
            human-product interaction, solves complex problems with practical
            solutions, and transforms ideas into reality. I can adapt my style
            to different requirements and contexts. I love the impact of my work
            on humanity. It makes me feel alive. <br />
            <br />
            Get in touch! I would love to chat about work, projects, design, or
            anything :)
            <br />
            <br />
            handoan6299@gmail.com
          </p>
        </div>
      </div>
      <div className='mt-16 lg:mt-32 pb-10 lg:pb-40 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24'>
        <div>
          <div
            className='text-2xl lg:text-3xl'
            style={{ fontFamily: 'Panchang-Regular' }}
          >
            Experience
          </div>
          <div className='mt-7'>
            <span className='text-xl'>UX/UI DESIGNER,</span> TGL Solutions
          </div>
          <div className='mt-2'>Oct 2021 - Present</div>
          <div className='border-t border-white mt-4 pt-3 pl-7'>
            <ul className='list-disc space-y-3'>
              <li>
                Collaborated with the project leader and team to research and
                create wireframes and user flow that meet the user needs and
                project goals.
              </li>
              <li>
                Designed visual concepts, components, design system, UI design,
                prototype, and interaction design that are consistent,
                intuitive, and user-friendly.
              </li>
              <li>
                Delivered the design to the developers and work closely with
                them to ensure the product quality and functionality.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div
            className='text-2xl lg:text-3xl'
            style={{ fontFamily: 'Panchang-Regular' }}
          >
            Education
          </div>
          <div className='space-y-3'>
            <div>
              <div className='mt-7 text-xl'>
                UNIVERSITY OF ARCHITECTURE HCMC
              </div>
              <div className='mt-2'>BFA in Graphic Design (2017- 2021)</div>
            </div>
            <div>
              <div className='mt-7 text-xl'>COURSERA</div>
              <div className='mt-2'>
                Google UX Design Professional Certificate (2023)
              </div>
            </div>
            <div>
              <div className='mt-7 text-xl'>
                NGUYEN QUANG DIEU HIGH SCHOOL FOR THE GIFTED
              </div>
              <div className='mt-2'>
                Specialization in Mathematics (2014- 2017)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
