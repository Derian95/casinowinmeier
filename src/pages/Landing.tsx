import { FC } from 'react';
import { Club, Events,Hero, Message, Promotions, Register, Services, Social, Map, Hotel} from '../sections';
import { ModalKeops, ModalPolitics, ModalRegister, ModalTerms, Toast } from '../common/components';
import BtnClub from '../common/components/BtnClub';
import { Catalogo } from '../sections/catalogo';

interface LandingProps {
  
}

export const Landing: FC<LandingProps> = ({}) => (
    <>
       
        <Hero />
        <Services />
        <Hotel/>
        <Message />
        <Club />
        <Catalogo/>
        <Promotions />
        <Events />
        <Register />
        <Map />
        <Social />
       
        {/*Flotante */}
        <BtnClub/>
        {/*Alertas */}
        <Toast />
        {/*Modals */}
        <ModalPolitics />
        <ModalTerms />
        <ModalRegister />
        <ModalKeops />
    </>
);
