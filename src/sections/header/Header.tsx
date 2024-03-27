import  { FC } from 'react';
import { Navbar } from './components';

interface HeaderProps {
  
}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header>
      <Navbar/>
    </header>
  );
};

export default Header;