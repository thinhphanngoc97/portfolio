import Image from 'next/image';
import Link from 'next/link';

export const worksList = [
  {
    name: 'TOP MANAGEMENT SYSTEM',
    thumbnail: '/tms/1.svg',
    time: 'On going',
    desc: 'A learning English app for children',
    link: '/project/tms'
  },
  {
    name: 'LINGOOD',
    thumbnail: '/lingood.svg',
    time: 'August 2021',
    desc: 'A learning English app for children',
    link: '/project/lingood'
  },
  {
    name: 'COTECCONS ACADEMY',
    thumbnail: '/work/coteccons.svg',
    time: 'On going',
    desc: 'A construction e-learning flatform',
    link: '/project/coteccons'
  },
  {
    name: 'TGL WEBSITE',
    thumbnail: '/tgl/1.svg',
    time: 'February 2023',
    desc: 'Rebranding and design new company’s website',
    link: '/project/tgl'
  },
  {
    name: 'SUGARLAND',
    thumbnail: '/work/sugarland.svg',
    time: 'August 2021',
    desc: 'A customizable cake website',
    link: '/project/sugarland'
  }
];

export function Work() {
  return (
    <div className='[&>*:nth-child(1)]:mt-5 lg:[&>*:nth-child(1)]:mt-10'>
      {worksList.map((item, index) => {
        return (
          <div
            key={index}
            className='mt-10 lg:mt-14 border rounded-xl border-white p-6 lg:p-10 flex flex-col lg:flex-row gap-10 bg-black'
          >
            <div className='flex-1 flex flex-col justify-center items-start'>
              <div
                className='text-xl lg:text-4xl'
                style={{ fontFamily: 'Panchang-Bold' }}
              >
                {item.name}
              </div>
              <div className='mt-1 text-gray-400'>{item.time}</div>
              <div className='mt-4'>{item.desc}</div>
              <Link
                href={item.link}
                className='bg-white text-black px-4 py-2 flex items-center rounded-full mt-6'
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
            <div className='w-full lg:w-1/2'>
              <Image
                className='inline'
                alt={item.name}
                src={item.thumbnail}
                width={0}
                height={0}
                style={{ width: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
