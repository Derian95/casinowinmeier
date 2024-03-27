import { FC } from 'react';
import { ClubBenefits, ClubSc } from './components';
import { LinksNavbar } from '../header/models';

interface ClubProps {
  
}

const Club: FC<ClubProps> = ({}) => {
  return (
    <div id={LinksNavbar.Club}>
      <ClubBenefits/>
      <ClubSc/>
    </div>
  );
};

export default Club;