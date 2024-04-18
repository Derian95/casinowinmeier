import { FC} from 'react';

interface TitleProps {
message? :       string
}

export const Title: FC<TitleProps> = () => {
    
  

    return(
        <h1 className=' text-3xl sm:text-7xl   w-full xl:text-left text-center  font-normal max-w-96 sm:max-w-full text-white drop-shadow-2xl'>
       <p className='text-5xl md:text-7xl lg:text-7xl xl:text-8xl font-bold mb-2'> ¡GANA S/50 </p> 
       EN BONOS CON
        <p className='font-bold mt-2'>WM CLUB!</p> 
      </h1>
    )
}