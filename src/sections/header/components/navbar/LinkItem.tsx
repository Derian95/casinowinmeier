import { FC } from 'react';
import { useNabvarStore } from '../../store';

interface LinkItemProps {
  link: string
  name: string
}

export const LinkItem: FC<LinkItemProps> = ({ link, name }) => {

  const {setShowMenuVar} =useNabvarStore()


  const closeMenuMobile=() => {
    setShowMenuVar(false)
  }

  return (
    <li className={`block py-2 pl-3 pr-1 text-xl lg:text-sm item-navbar text-white drop-shadow-lg`}>
      <a href={`#${link}`} onClick={closeMenuMobile}>{name}</a>
    </li>
  );
};
