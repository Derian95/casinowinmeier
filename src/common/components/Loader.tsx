import { FC } from 'react';

// import Lottie from "lottie-react";
// import loaderAnimation from '../../assets/loader.json'

interface LoaderProps {
  
}

export const Loader: FC<LoaderProps> = ({}) => {
  return (
    // <div className='w-full h-screen grid place-items-center'>
    //         <Lottie animationData={loaderAnimation}  loop={true}  className='w-52'/>
    // </div>

<div className='h-screen w-full flex justify-center items-center'>
<div className="loader"></div>
</div>
  )
}
