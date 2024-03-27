import { FC } from 'react';
import { SliderEvents,TextEvents} from './components';
import imgBgEvetns from '../../assets/events/bgClub.jpg'
import { LinksNavbar } from '../header/models';
import { useCasinoStore } from '../../store/casinoStore';

interface EventsProps {
  
}

const style = {
  backgroundAttachment: 'fixed',
  backgroundImage: `url(${imgBgEvetns})`,
  backgroundSize: 'cover', 
};
const Events: FC<EventsProps> = ({}) => {
  const { dataCasino } = useCasinoStore()
  if(dataCasino?.sections.events.events.length==0) return null
  return (
    <section className='section relative' style={style} id={LinksNavbar.Events}>
      <div className='absolute w-full h-full bg-[#1a1a1a]/90'></div>
      <div className='children flex flex-col lg:flex-row items-center justify-center gap-10 '>
        <div className='w-full lg:w-3/12'>
          <TextEvents/>
        </div>
        <div className='relative w-full lg:w-9/12 max-w-[70vw] max-h-fit'>
          <SliderEvents/>
        </div>
      </div>
    </section>
  );
};

export default Events;