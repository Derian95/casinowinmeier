import { FC } from 'react';

interface ServiceItemProps {
  title:            string
  description:      string
  image:            string
	colorBg: 		      string

}

export const ServiceItem: FC<ServiceItemProps> = ({ description, image, title,colorBg }) => {
  return (
    <div className='flex flex-col shadow-md   gap-4 py-12 px-10 hover:-translate-y-4 duration-500  border border-[#f3f3f3] rounded-xl  h-full items-center'>
    <div className=' w-fit p-3 rounded-lg mb-3' style={{backgroundColor:colorBg}}>
        <img src={image} alt={description} className='w-7' height={20} width={20}/>
    </div>
    <h3 className='font-semibold text-[#263238] text-xl text-center mb-2'>{title}</h3>
    <p className='text-justify '>
        {description}
    </p>
</div>
  );
};
