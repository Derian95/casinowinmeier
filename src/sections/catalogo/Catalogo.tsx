import { Link } from 'react-router-dom'
import { useCasinoStore } from '../../store/casinoStore'
// import bgCatalogo from '../../assets/catalogo/catalogo-bg.webp'

const style2 = {
	backgroundAttachment: 'fixed',
    // backgroundImage: `linear-gradient(to right, rgb(0 0 0 / 48%), rgb(0 0 0 / 23%)), url(${bgCatalogo})`,
    backgroundSize: 'cover'
  };
export const Catalogo = () => {
	const { dataCasino } = useCasinoStore()
	return (
		<section className='grid place-items-center py-20 lg:py-10 px-4' id='catalogo' style={style2}>
			<div className='children flex flex-col lg:flex-row items-center  gap-20 lg:gap-20'>
				<div className='w-full lg:w-2/4 flex flex-col items-center lg:items-start '>
					<h2 className='normal-title mb-2 catalogo' >
						{dataCasino?.sections.catalogue.title}
					</h2>
					<p className='normal-text catalogo'>
						{dataCasino?.sections.catalogue.description}
					</p>
					<Link to="/catalogo" target="_blank" className='bg-metal w-fit'>Visíta nuestro catálogo</Link>
                    {/* <a href="/catalogo.pdf" download="catalogo-keops.pdf" className='bg-metal w-fit'>Visíta nuestro catálogo </a> */}
				</div>
				<div className='w-full md:w-3/4 lg:w-2/4'>
					<img
						src={dataCasino?.sections.catalogue.imagePathWeb}
						alt=''
						className='object-cover w-full'
					/>
				</div>
			</div>
		</section>
	)
}

export default Catalogo
