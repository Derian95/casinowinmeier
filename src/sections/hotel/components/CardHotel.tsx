import { FC } from 'react';

interface CardHotelProps {
  image:        string
  description:  string
}

export const CardHotel: FC<CardHotelProps> = ({ description, image }) => {
  return (
    <div className='relative flex flex-col justify-center items-center gap-4 cursor-pointer group overflow-hidden rounded-lg'>
      <img src={image} alt={description} className='object-bottom rounded-lg h-96 w-96 object-cover group-hover:scale-105 duration-250 ' />
     <div className='bg-[#FF5500] grid place-items-center text-white py-2 px-2 mb-2 rounded-full text-center text-sm w-full'>
      <p className='  text-balance   max-w-48'>
        {description}
        </p>
     </div>
    </div>
  );
};
