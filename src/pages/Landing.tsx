import { FC } from 'react';
import { Club, Events,Hero, Message, Promotions, Register, Services, Social, Map, Hotel} from '../sections';
import { ModalKeops, ModalPolitics, ModalRegister, ModalTerms, Toast } from '../common/components';
import BtnClub from '../common/components/BtnClub';

interface LandingProps {
  
}

export const Landing: FC<LandingProps> = ({}) => (
    <>
       
        <Hero />
        <Services />
        <Hotel/>
        <Message />
        <Club />
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
