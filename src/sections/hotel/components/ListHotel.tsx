import { FC } from 'react';
import { infohotel } from '../data/hotel';
import { CardHotel } from '.';

interface ListHotelProps {
  
}

export const ListHotel: FC<ListHotelProps> = ({}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
    {
        infohotel.map(feature =><CardHotel image={feature.image} description={feature.description}/>)
    }
    </div>
  );
};
