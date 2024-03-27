import { FC } from 'react';
import { ServiceList } from '.';
import { useCasinoStore } from '../../store/casinoStore';
import { LinksNavbar } from '../header/models';

interface ServicesProps {
  
}

 const Services: FC<ServicesProps> = ({}) => {
  const { dataCasino } = useCasinoStore()
  return (
    <section className='section' id={LinksNavbar.Ofert}>
        {/* <span style={{ color: dataCasino?.generalData.color }} className='uppercase'>
            {dataCasino?.sections.clubNews.infoSection.name}
          </span> */}
          <h2 className="mb-10 normal-title  max-w-sm text-center" style={{maxWidth:'384px', textAlign:'center'}}>
            {dataCasino?.sections.clubNews.infoSection.title}
          </h2>
        <ServiceList/>
    </section>
  );
};

export default Services
