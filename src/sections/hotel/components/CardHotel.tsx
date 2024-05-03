import { FC } from 'react';

interface CardHotelProps {
  image:        string
  description:  string
}

export const CardHotel: FC<CardHotelProps> = ({ description, image }) => {
  return (
    <div className='relative flex justify-center items-end cursor-pointer group overflow-hidden rounded-lg'>
      <img src={image} alt={description} className='rounded-lg h-96 w-96 object-cover group-hover:scale-105 duration-250' />
      <p className='absolute bg-[#FF5500] text-balance  text-white py-2 px-4 mb-4 rounded-full text-center text-sm max-w-72'>
      {description}

      </p>
    </div>
  );
};
