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
      <a href={href} onClick={onClick} className='bg-gradient-to-b bg-metal rounded-full py-3 px-6 text-[#2E2E2E] animation2'>
       {name}
      </a>
    );
  }

  return (
    <button onClick={onClick} className='bg-gradient-to-b bg-metal rounded-full py-3 px-6 text-[#2E2E2E] '>
             {name}
    </button>
  );
};