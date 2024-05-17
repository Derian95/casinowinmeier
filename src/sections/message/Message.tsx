import { FC } from 'react';
import { useCasinoStore } from '../../store/casinoStore';
import { Button } from '../../common/components';
import { LinksNavbar } from '../header/models';

interface MessageProps {
  
}


const Message: FC<MessageProps> = ({}) => {
  const {dataCasino} = useCasinoStore()
  // console.log(dataCasino?.sections)
  return (
    <section style={{backgroundImage:`url(${dataCasino?.sections.promotionalAd.imagePathWeb})`,backgroundAttachment:'fixed',backgroundRepeat:'no-repeat', backgroundSize:'cover'}} className='h-[450px] flex items-center justify-center relative'>

        <div className='absolute bg-black/60 w-full h-full z-0'></div>

        <article className='flex flex-col items-center z-10 gap-5'>
        <h1 className="text-3xl sm:text-3xl    w-full  text-center   max-w-96 sm:max-w-full text-white drop-shadow-2xl ">
          {/* ¡Compra s/50 */}
          <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold my-2"> ¡Bienvenido a Ganar!</p><p className="font-normal mt-2 max-w-[500px]  m-auto xl:m-0 text-center">Compra S/50 y juega S/100 en bonos WM Club.</p>
        {/* Bienvenido  a <br />Ganar */}

          </h1>
            <Button type={'link'} href={`#${LinksNavbar.Register}`} name='Regístrate aquí y gana'/>
            <p className='text-[#e7e7e7] text-sm'>{dataCasino?.sections.promotionalAd.description}</p>

        </article>

    </section>
  );
};

export default Message;