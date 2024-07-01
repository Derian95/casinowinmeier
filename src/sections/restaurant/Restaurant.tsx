import { FC } from 'react';
import { useCasinoStore } from '../../store/casinoStore';
import { Link } from 'react-router-dom';
interface RestaurantProps {
  
}

export const Restaurant: FC<RestaurantProps> = ({}) => {
	const { dataCasino } = useCasinoStore()

  return (
    <section className='grid place-items-center py-20 lg:pt-40 px-4' id='restaurante' >
    <div className='children flex flex-col lg:flex-row items-center  gap-20 lg:gap-20'>
        <div className='w-full lg:w-2/4 flex flex-col items-center lg:items-start '>
            <h2 className='normal-title mb-2 catalogo' >
            {dataCasino?.sections.restaurant.title}
            </h2>
            <p className='normal-text catalogo'>
            {dataCasino?.sections.restaurant.description}

            </p>
            <Link to="/restaurante" target="_blank" className='bg-metal w-fit'>Visíta nuestra Carta</Link>
            {/* <a href="/catalogo.pdf" download="catalogo-keops.pdf" className='bg-metal w-fit'>Visíta nuestro catálogo </a> */}
        </div>
        <div className='w-full md:w-3/4 lg:w-2/4'>
            <img
                src={dataCasino?.sections.restaurant.imagePathWeb}
                alt=''
                className='object-cover w-full h-[500px] rounded-2xl'
            />
        </div>
    </div>
</section>
  );
};
