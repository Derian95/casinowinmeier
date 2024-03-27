import dataCountries from '../data/country.json'

// import image from '../assets/noflag.png'

export const useCountryCode = () => {

	const countrysCodeFilter = dataCountries.filter(x=>x.CodigoTelefonico != '')

    const mappedCountriesCodes = countrysCodeFilter.map((country) => ({
		value: country.CodUbigeo,
		label: (
			<div className='flex gap-1 '>
				{/* <img src={country.Bandera} className='w-10 h-5' alt='' /> */}
				<img src={country.Bandera } className={`${country.Bandera ? 'w-10 h-5 ':'h-3 w-5 '}`} alt='' />
				{country.CodigoTelefonico}
			</div>
		),
		countryName: country.Nombre,
	}))

    return {

		mappedCountriesCodes
    }
}


