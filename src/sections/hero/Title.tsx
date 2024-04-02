import { FC} from 'react';

interface TitleProps {
message :       string
}

export const Title: FC<TitleProps> = ({ message }) => {
    
  

    return(
        // <h1 className='text-7xl w-full text-center md:text-left md:w-2/4 font-bold'><span className='text-orange-400'>DISFRUTA</span> DEL MEJOR CASINO DE <span className='text-orange-400 '>TACNA </span>.</h1>
        <h1 className=' text-3xl lg:text-7xl w-full text-center  font-normal max-w-96 lg:max-w-full text-black drop-shadow-2xl'>
        <p className='text-5xl md:text-7xl lg:text-7xl xl:text-9xl font-bold mb-2'> ¡GANA S/50 </p> 
        EN BONOS CON
         <p className='font-bold mt-2'>WM CLUB!</p> 
       </h1>
    )
}