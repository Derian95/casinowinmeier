import { FC } from 'react';
import image1 from '../../../../assets/club/i1.svg'
import image2 from '../../../../assets/club/i2.svg'
import image3 from '../../../../assets/club/i3.svg'
import image4 from '../../../../assets/club/i4.svg'
import { ItemBenefits } from '.';
import { useCasinoStore } from '../../../../store/casinoStore';
interface ListBenefitsProps {
  
}

const dataBenefits=[
    {
       id:              1,
       image:           image1,
       description:     '¡Es muy sencillo! Solo debes registrarte y recibir tu tarjeta de Socio.'
    },
    {
        id:              2,
        image:           image2,
        description:     'Tendrás acceso al canje de cientos de productos, bonos promocionales, dinero en efectivo y más.'
     },
     {
        id:              3,
        image:           image3,
        description:     'Al jugar, debes insertar tu tarjeta para acumular puntos y generar cupones.'
     },
     {
        id:              4,
        image:           image4,
        description:     '¡Te sorprenderemos con beneficios exclusivos y grandes premios!'
     },
    
]
export const ListBenefits: FC<ListBenefitsProps> = ({}) => {
    const { dataCasino } = useCasinoStore()
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-9'>
      {
        dataBenefits.map(be=>(
            <ItemBenefits key={be.id} color={dataCasino?.generalData.color!} image={be.image} description={be.description}/>
        ))
      }
    </div>
  );
};
