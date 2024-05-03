import { FC} from 'react';

interface TitleProps {
message? :       string
}

export const Title: FC<TitleProps> = () => {
    
  

    return(
        <h1 className=' text-3xl sm:text-6xl xl:text-left   w-full  text-center   max-w-96 sm:max-w-full text-white drop-shadow-2xl'>
       ¡Compra s/50
       <p className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold my-2'> Y JUEGA S/100 </p> 
       
        <p className='font-normal mt-2 max-w-[500px]  m-auto xl:m-0'>en bonos con WM CLUB!</p> 
      </h1>
    )
}