import { useEffect } from "react";
import { useCasinoStore } from "../store/casinoStore";
import { useModalStore } from "../sections/register/store/modalRegisterStore";
import { EncryptedCodeProvenance } from "../sections/register/models";


export const useGetProvenance=()=>{
	const {  setDataToken } = useCasinoStore()
    const { setModalRegister} =useModalStore()

    useEffect(() => {
		const url = window.location.href
		const currentSubdomain = window.location.hostname.split('.')[0];
		const urlSearchParams = new URLSearchParams(new URL(url).search)
		const valorPro = urlSearchParams.get('prov')

		if(currentSubdomain === 'registro'){
			setDataToken('zh-adNnhMM4')
			setModalRegister(true)

		}
		else if(currentSubdomain === 'rpp'){
			setDataToken('g9OzuluoDbE')
			setModalRegister(true)
		}
		else if(currentSubdomain === 'correo'){
			setDataToken('ZODcQDCDf8g')
			setModalRegister(true)

		}
		else{

			if (valorPro) {
				// setShowModal(true)
				setModalRegister(true)
				setDataToken(valorPro)
			} else {

				setDataToken(EncryptedCodeProvenance.development)
			}
		}
		
	}, [])
}