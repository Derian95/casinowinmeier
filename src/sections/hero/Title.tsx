import { FC} from 'react';

interface TitleProps {
message :       string
}

export const Title: FC<TitleProps> = ({ message }) => {
    
  

    return(
        // <h1 className='text-7xl w-full text-center md:text-left md:w-2/4 font-bold'><span className='text-orange-400'>DISFRUTA</span> DEL MEJOR CASINO DE <span className='text-orange-400 '>TACNA </span>.</h1>
        <h1 className='text-4xl lg:text-7xl w-full text-center  font-bold max-w-96 lg:max-w-full text-black drop-shadow-2xl'>
        {message}
      </h1>
    )
}