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
    <section style={{backgroundImage:`url(${dataCasino?.sections.promotionalAd.imagePathWeb})`}} className='h-[450px] flex items-center justify-center relative'>

        <div className='absolute bg-black/60 w-full h-full z-0'></div>

        <article className='flex flex-col items-center z-10 gap-5'>
            <h2 className='font-bold text-white text-4xl max-w-[700px] text-center'>{dataCasino?.sections.promotionalAd.title}</h2>
            <p className='text-[#c2c2c2]'>{dataCasino?.sections.promotionalAd.description}</p>
            <Button type={'link'} href={`#${LinksNavbar.Register}`} name='Regístrate aquí y gana'/>
        </article>

    </section>
  );
};

export default Message;