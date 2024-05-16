import { FC } from 'react';
import { useNabvarStore } from '../../store';
// import useScroll from '../../hooks/useScroll';

interface LinkItemProps {
  link: string
  name: string
}

export const LinkItem: FC<LinkItemProps> = ({ link, name }) => {

  const {setShowMenuVar} =useNabvarStore()

  // const hasScrolled = useScroll()

  const closeMenuMobile=() => {
    setShowMenuVar(false)
  }

  return (
    <li className={`block py-2 pl-3 pr-1 text-xl xl:text-sm item-navbar text-white `}>
      <a href={`#${link}`} onClick={closeMenuMobile}>{name}</a>
    </li>
  );
};
