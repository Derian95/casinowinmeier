import { FC } from 'react';

interface CardProps {
    title:          string
    description:    string
    icon:           string
    index:          number
}

export const Card: FC<CardProps> = ({description, icon, index, title}) => {
  return (
    <div className={`flex justify-between flex-col gap-10 ${6==index  ? 'lg:col-span-3':''} `}>
       <div className="flex flex-col items-center">
       <img src={icon} alt=""  className="h-10 text-white fill-white stroke-white my-5" style={{ fill: 'red' }}/>
        <h3 className='text-lg  text-center font-semibold text-[#050a18] mb-2'>{title}</h3>
        <p className={`max-w-xs lg:max-w-max  mb-5 text-center text-sm text-[#333333] ${6==index  ? 'lg:max-w-sm':''}`}>{description}</p>
       </div>
    </div>
  );
};
