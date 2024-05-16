import { FC } from 'react';
import { LinksNavbar } from '../header/models';
import { ListHotel } from './components';

interface HotelProps {
  
}

const Hotel: FC<HotelProps> = ({}) => {
  return (
    <section className='mt-20 mb-40 px-4 grid place-items-center' id={LinksNavbar.Hotel}>
         <h2 className="mb-10 normal-title  max-w-lg text-center" style={{maxWidth:'484px', textAlign:'center'}}>
         ¡Descubre la experiencia completa!
          </h2>
          <p className="mb-10 lg:max-w-2xl  text-[#585858] text-center ">
          Explora momentos inolvidables donde la diversión, la deliciosa comida y el descanso se fusionan en un solo lugar.
      </p>
      <div className='children flex flex-col lg:flex-row items-center justify-center gap-10'>
        <ListHotel/>
      </div>
    </section>
  );
};

export default Hotel;