import { useState } from 'react';
import ModalImage from 'react-modal-image';

export function DesignShot() {
  const designShots = [
    {
      thumbnail: '/design_shot/1.svg'
    },
    {
      thumbnail: '/design_shot/2.svg'
    },
    {
      thumbnail: '/design_shot/3.svg'
    },
    {
      thumbnail: '/design_shot/4.svg'
    }
  ];

  const [limit, setLimit] = useState(4);

  const onLoadMore = () => {
    setLimit(limit + 4);
  };

  return (
    <div className='mt-10 lg:mt-20'>
      <div
        className='text-xl lg:text-2xl'
        style={{ fontFamily: 'Panchang-Regular' }}
      >
        Design Shots
      </div>
      <div className='mt-4 lg:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10'>
        {designShots.slice(0, limit).map((item, index) => {
          return (
            <div key={index}>
              <ModalImage
                alt={''}
                small={item.thumbnail}
                large={item.thumbnail}
                hideDownload
              />
            </div>
          );
        })}
      </div>
      <div className='text-center mt-5 lg:mt-10'>
        <button
          hidden={limit >= designShots.length}
          className='border border-white rounded-full px-4 py-2'
          onClick={onLoadMore}
        >
          Load more
        </button>
      </div>
    </div>
  );
}
