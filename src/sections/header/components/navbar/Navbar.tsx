import { FC } from 'react';
import { ButtonMenu, LinkList, LinkListMobile } from '.';
import useScroll from '../../hooks/useScroll';
import './Navbar.css'
import { useCasinoStore } from '../../../../store/casinoStore';

interface NavbarProps {
  
}

const Navbar: FC<NavbarProps> = ({}) => {
  const hasScrolled = useScroll()
  const { dataCasino } =useCasinoStore()

  return (
    <nav className={`navbar ${hasScrolled ? 'bg-[#161616] shadow-sm' : ''} `}>
      <div className='flex justify-between items-center w-full  '>
          <img src={dataCasino?.generalData.logoPathWeb} alt="logo-casino" className=' z-30 h-12 md:h-14 object-contain' />
          <ButtonMenu />
          <LinkList />
          <LinkListMobile />
      </div>
    </nav>
  );
};

export default Navbar;