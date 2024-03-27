import  { FC } from 'react';
import { ServiceItem } from '.';
import { useCasinoStore } from '../../store/casinoStore';

interface ServiceListProps {

}

export const ServiceList: FC<ServiceListProps> = ({ }) => {

    const { dataCasino } = useCasinoStore()
    return (
        <div className='children grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-5'>
            {dataCasino?.sections.clubNews.clubNews.map((service) => {
                return(
                    <ServiceItem 
                        key={service.idClubNews} 
                        title={service.name} 
                        description={service.description} 
                        image={service.imagePathWeb} 
                        colorBg={dataCasino.generalData.color}
                    />
                )
            })}
        </div>
    );
};
