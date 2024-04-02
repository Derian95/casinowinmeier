import { FC } from 'react';


interface ButtonProps {
  type: 'button' | 'link';
  href?: string;
  onClick?: () => void;
  name:string
}

export const Button: FC<ButtonProps> = ({ type, href, onClick, name }) => {
  if (type === 'link' && href) {
    return (
      <a href={href} onClick={onClick} className='bg-metal w-fit animation'>
       {name}
      </a>
    );
  }

  return (
    <button onClick={onClick} className='bg-metal w-fit '>
             {name}
    </button>
  );
};