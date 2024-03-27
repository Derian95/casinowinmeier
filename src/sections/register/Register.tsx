import { FC } from 'react';
import { FormRegister } from '.';
import { useCasinoStore } from '../../store/casinoStore';
import { LinksNavbar } from '../header/models';

interface RegisterProps {
  
}

const Register: FC<RegisterProps> = ({}) => {
    const {dataCasino } = useCasinoStore()
    return(
        <section className='section px-5 ' id={LinksNavbar.Register}>
        <div className='flex flex-col-reverse lg:flex-row w-full max-w-screen-xl p-2 lg:p-10 shadow-2xl gap-10 rounded-lg'>
            <div className='w-full lg:w-7/12  flex justify-center '>
                <FormRegister />
            </div>
            <div className='w-full lg:w-5/12 bg-[#3b3b3b] p-2 lg:p-10  rounded-xl flex flex-col justify-between'>
                <h4 className="text-xl sm:text-2xl lg:text-4xl mb-10 font-semibold text-white">¡REGÍSTRATE Y PIDE AHORA TU TARJETA GRATUITA!</h4>
                <div className='flex justify-end'>
                <img src={dataCasino?.sections.register.imagePathWeb} alt="" className='w-32 lg:w-full ' />
                </div>
            </div>
        </div>
    </section>
    )
}

export default Register;