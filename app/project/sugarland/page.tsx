import Image from 'next/image';

export default function SugarLand() {
  return (
    <div className='pb-20 lg:pb-40 overflow-hidden'>
      <div className='container mx-auto px-4'>
        <div
          className='lg:mt-20 text-lg md:text-3xl lg:text-5xl flex-1'
          style={{ fontFamily: 'Panchang-Regular' }}
        >
          <p style={{ fontFamily: 'Panchang-Semibold' }}>SUGARLAND</p>
        </div>
        <div className='mt-8'>
          <p className='w-3/5'>
            A website selling cakes with the feature of decorating cakes
            according to your request, with a minimalist style interface,
            elegant and eye-catching
          </p>
        </div>
        <div className='mt-20 px-14'>
          <Image
            className='inline -z-10 relative'
            alt='Sugarland'
            src='/order_cake.svg'
            width={0}
            height={0}
            style={{ width: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
      <div className='-mt-0.5 w-screen bg-white py-14 text-black'>
        <div className='container mx-auto px-4 relative'>
          <Image
            className='absolute -top-2 -left-10 text-orange-500'
            alt=''
            src='/icon_star_2.svg'
            width={44}
            height={44}
          />
          <div className='text-2xl' style={{ fontFamily: 'Panchang-Regular' }}>
            <p style={{ fontFamily: 'Panchang-Semibold' }}>Project Overview</p>
          </div>
          <div className='flex flex-row mt-6 gap-20'>
            <div className='basis-2/3'>
              <div className='font-semibold'>ABOUT THE PROJECT</div>
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
            <div className='basis-1/3'>
              <div className='font-semibold'>WHAT I DO</div>
              <div className='mt-3'>
                <ul>
                  <li>- User research</li>
                  <li>- UX/UI Design</li>
                  <li>- Copywriting</li>
                  <li>- Prototyping</li>
                </ul>
              </div>
              <div className='mt-5'>
                <div className='font-semibold'>PROJECT DURATION</div>
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
      <div className='container mx-auto px-4 relative mt-12'>
        <Image
          className='absolute -top-2 -left-10 text-orange-500'
          alt=''
          src='/icon_star_2.svg'
          width={44}
          height={44}
        />
        <div className='text-2xl' style={{ fontFamily: 'Panchang-Regular' }}>
          <p style={{ fontFamily: 'Panchang-Semibold' }}>User Research</p>
        </div>
        <div className='font-semibold mt-6'>QUANTITATIVE RESEARCH</div>
        <div className='mt-3'>Conducted an online survey among 297 people</div>
        <div className='font-semibold mt-6'>QUALITATIVE RESEARCH</div>
        <div className='mt-3'>
          <ul className='list-decimal ml-4 space-y-2'>
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
    </div>
  );
}
