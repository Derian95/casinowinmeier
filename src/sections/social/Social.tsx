import { FC } from 'react';
import img from '../../assets/events/bgClub.jpg'
import tiktok from '../../assets/social/tiktok.svg'
import instagram from '../../assets/social/instagram.svg'
import facebook from '../../assets/social/facebbok.svg'

interface SocialProps {
  
}
const style = {
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover', // Esto ajusta el tamaño de la imagen de fondo
    /* Puedes agregar más estilos según tus necesidades */
}
const Social: FC<SocialProps> = ({}) => {
  return (
    <section style={style} className='w-full h-auto md:min-h-[200px] '>
			<div className=' w-full h-full bg-[#1a1a1a]/90 z-10  flex justify-center  py-20 flex-col items-center gap-10 md:gap-11'>
				<h6
					className=' text-2xl   text-white font-bold max-w-4xl'
					>
					SÍGUENOS
				</h6>

				<div className='flex gap-2 md:gap-14 flex-row'>
					<a
						className=' p-5 md:p-5 hover:brightness-110 w-fit'
						target='_blank'
						href='https://www.instagram.com/winmeierhotel'
						>
						<img src={instagram} alt='' className='w-14 md:w-20' />
					</a>
					<a
						className=' p-5 md:p-5 hover:brightness-110'
						target='_blank'
						href='https://www.facebook.com/winmeierhotel'
						>
						<img src={facebook} alt='' className='w-14 md:w-20 ' />
					</a>
					<a
						className=' p-5 md:p-5 hover:brightness-110'
						target='_blank'
						href='https://www.tiktok.com/@winmeiercasino'
						>
						<img src={tiktok} alt='' className='w-14 md:w-20' />
					</a>
				</div>
			</div>
		</section>
  );
};

export default Social;