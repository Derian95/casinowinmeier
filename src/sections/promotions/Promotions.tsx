import { FC } from 'react';
import { SliderPromotion, TextPromotion } from './components';
import { LinksNavbar } from '../header/models';
import { useCasinoStore } from '../../store/casinoStore';


interface PromotionsProps {
  
}

const Promotions: FC<PromotionsProps> = ({}) => {
  const { dataCasino } = useCasinoStore()
  if(dataCasino?.sections.promotions.promotions.length==0) return null
  return (
    <section className='section bg-[#fffbf2]' id={LinksNavbar.Promotions}>
      <div className='children flex flex-col lg:flex-row items-center justify-center gap-10'>
        <div className='w-full lg:w-3/12'>
          <TextPromotion/>
        </div>
        <div className='relative w-full lg:w-9/12 max-w-[70vw] max-h-fit'>
          <SliderPromotion/>
        </div>
      </div>
    </section>
  );
};

export default Promotions;