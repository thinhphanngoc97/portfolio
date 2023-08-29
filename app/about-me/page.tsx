import Image from 'next/image';
import Link from 'next/link';

export default function AboutMe() {
  return (
    <div className='pb-10 lg:pb-40 container mx-auto px-4'>
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
            Hello, I&apos;m Han Doan, a designer with an edge in UI/UX design
            based in Ho Chi Minh City, Vietnam. I have a degree in Graphic
            Designer from the University of Architecture HCMC.
            <br />
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
            <a href={'mailto:handoan6299@gmail.com'}>handoan6299@gmail.com</a>
            <br />
            <a
              target='_blank'
              href={'https://dribbble.com/handoan6299'}
              className='underline underline-offset-2'
            >
              Dribble
            </a>
            <br />
            <a
              target='_blank'
              href={'https://www.behance.net/handoan6297761'}
              className='underline underline-offset-2'
            >
              Behance
            </a>
          </p>
        </div>
      </div>
      <div className='mt-16 lg:mt-32 pb-10 lg:pb-40 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24'>
        <div>
          <div
            className='text-2xl lg:text-3xl'
            style={{ fontFamily: 'Panchang-Semibold' }}
          >
            Experience
          </div>
          <div className='mt-7'>
            <span className='text-xl font-semibold'>UX/UI DESIGNER</span> | TGL
            Solutions | Full-time
          </div>
          <div className='mt-2'>Mar 2022 - Present</div>
          <div className='border-t border-white mt-4 pt-3 pl-7'>
            <ul className='list-disc space-y-3'>
              <li>
                Rebranded for the company, which includes brand identity,
                mascot, a website, social media templates,...
              </li>
              <li>
                Created logo and website for the company&apos;s head office in
                Japan and a branch in Da Nang.
              </li>
              <li>
                Worked on various projects, including an HRM system and other
                outsourcing projects.
              </li>
              <li>
                Contributed to bringing the Coteccons Academy online learning
                platform with a 100% customer satisfaction rate compared to two
                other competitors
              </li>
              <li>
                Conducted in-depth research, created, and delivered design
                solutions from scratch, including both mobile and web platforms.
              </li>
              <li>
                Worked in a cross-functional team to test and refine the design
                solutions based on users&apos; and clients&apos; feedback until
                they achieved the desired outcomes.
              </li>
              <li>
                Maintained 100% client satisfaction by ensuring that all
                projects meet quality and deadlines.
              </li>
            </ul>
          </div>
          <div className='mt-10 lg:mt-12'>
            <span className='text-xl font-semibold'>GRAPHIC DESIGNER</span> |
            Tobi Streetwear | Part-time
          </div>
          <div className='mt-2'>Nov 2020 - Jan 2021</div>
          <div className='border-t border-white mt-4 pt-3 pl-7'>
            <ul className='list-disc space-y-3'>
              <li>
                Teamed up with the fashion designer and the creative director to
                create illustrations for clothing, accessories, and social
                media.
              </li>
            </ul>
          </div>
          <div className='mt-10 lg:mt-12'>
            <span className='text-xl font-semibold'>GRAPHIC DESIGNER</span> |
            IMC+ | Intern
          </div>
          <div className='mt-2'>July 2020 - Oct 2020</div>
          <div className='border-t border-white mt-4 pt-3 pl-7'>
            <ul className='list-disc space-y-3'>
              <li>
                Collaborated with the marketing team to create social posts for
                the fanpage of K-Group&apos;s App.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div
            className='text-2xl lg:text-3xl'
            style={{ fontFamily: 'Panchang-Semibold' }}
          >
            Education
          </div>
          <div className='space-y-3'>
            <div>
              <div className='mt-7 text-xl font-semibold'>
                UNIVERSITY OF ARCHITECTURE HCMC
              </div>
              <div className='mt-2'>BFA in Graphic Design (2017- 2021)</div>
            </div>
            <div>
              <div className='mt-7 text-xl font-semibold'>COURSERA</div>
              <div className='mt-2'>
                Google UX Design Professional Certificate (2023)
              </div>
            </div>
            <div>
              <div className='mt-7 text-xl font-semibold'>
                NGUYEN QUANG DIEU HIGH SCHOOL FOR THE GIFTED
              </div>
              <div className='mt-2'>
                Specialization in Mathematics (2014- 2017)
              </div>
            </div>
          </div>
          <div
            className='text-2xl lg:text-3xl mt-10 lg:mt-14'
            style={{ fontFamily: 'Panchang-Semibold' }}
          >
            Tools
          </div>
          <ul className='mt-3 lg:mt-6 list-disc space-y-1'>
            <li className='ml-8'>Figma</li>
            <li className='ml-8'>Adobe XD</li>
            <li className='ml-8'>Adobe Illustrator</li>
            <li className='ml-8'>Adobe Photoshop</li>
            <li className='ml-8'>Adobe InDesign</li>
          </ul>
          <div
            className='text-2xl lg:text-3xl mt-10 lg:mt-14'
            style={{ fontFamily: 'Panchang-Semibold' }}
          >
            Skills
          </div>
          <ul className='mt-3 lg:mt-6 list-disc space-y-1'>
            <li className='ml-8'>UI/ Interaction design</li>
            <li className='ml-8'>User research</li>
            <li className='ml-8'>Wireframing</li>
            <li className='ml-8'>Prototyping</li>
            <li className='ml-8'>Usability testing</li>
            <li className='ml-8'>Critical thinking</li>
            <li className='ml-8'>Communication skills</li>
            <li className='ml-8'>Time management</li>
            <li className='ml-8'>Cross-functional Collaboration</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
