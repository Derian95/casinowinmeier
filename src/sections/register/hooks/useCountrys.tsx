import dataCountries from '../data/country.json'


export const useCountrys = () => {

	const countrysFilter = dataCountries.filter(x=>x.Continente =='SA')
    const mappedCountries = countrysFilter.map((country) => ({
		value: country.CodUbigeo,
		label: (
			<div className='flex gap-1'>
				<img src={country.Bandera} className='w-10 h-5' alt='' />
				{country.Nombre}
			</div>
		),
		countryName: country.Nombre,
	}))

    return {

		mappedCountries
    }
}


