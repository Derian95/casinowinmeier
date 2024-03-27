import { useForm } from "react-hook-form";
import { useConditions, useConfettiAnimation } from ".";
import { 
  // ClientVerify, CodeHallIas, GenerateCode,
   RegisterData } from "../models";
import { useModalSuccessStore } from "../store/modalSuccess";
import { 
  // generateCode, registerNewUserIas, 
  registerNewuser,
  //  verifyClient 
  } from "../services/actions";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
// import { RegisterIas } from "../models/iasRegister";
import dataCountries from '../data/country.json'
// import dataDocument from '../data/document.json'

export const useRegister =() =>{
    const [postData, setPostData] = useState<boolean>(false);
    const { handleMaxYearsOldChange,handleTermsChange,maxYearsOld,terms, } = useConditions()
    const { startAnimation, getInstance } = useConfettiAnimation()
    const { onOpen } = useModalSuccessStore();
  
    const {
      register,
      handleSubmit,
      reset,
      setValue,
      control,
      watch,
      formState: { errors },
    } = useForm<RegisterData>();
  
  
    const sendRegister = async (dataForm: RegisterData) => {
      // const idDocumentData = dataForm.documentType
      // const dataUbigeo = dataCountries.find((p) => p.CodUbigeo == dataForm.codUbigeo)
      const dataUbigeoCode = dataCountries.find((p) => p.CodUbigeo == dataForm.codUbigeoNumber)
      // const typeDocumentFinal = dataDocument.find((p) => p.idDocumentType == idDocumentData)

      // console.log(dataUbigeoCode?.Nombre)
      
      dataForm.lastName =dataForm.firstName +" " +dataForm.lastName
      dataForm.nationality= dataUbigeoCode?.Nombre!
      // if ( maxYearsOld == true && terms == true) {
      //   setPostData(true)
        
      //   try {
          
      //     const dataVerify:ClientVerify={
      //       codsala:          CodeHallIas.producction,
      //       documentNumber:   dataForm.documentNumber,
      //       phoneNumber:      dataForm.phone,
      //       idDocumentType:   typeDocumentFinal?.idIAS!
      //     }
      //     console.log(dataVerify)

      //     const clientVerify = await verifyClient(dataVerify)
      //     console.log(clientVerify)
      //     if(!clientVerify.clientExists){
      //         let aiasGender = ''
      //         if (dataForm.gender == '0') {
      //           aiasGender = 'M'
      //         } else if (dataForm.gender == '1') {
      //           aiasGender = 'F'
      //         }
      //         const formatDataIas:RegisterIas ={
      //           ApelMat:            dataForm.lastName,
      //           Celular1:           dataForm.phone,
      //           ApelPat:            dataForm.firstName,
      //           CodigoPais:         dataUbigeoCode?.CodigoTelefonico!,
      //           FechaNacimiento:    dataForm.birthDate,
      //           Genero:             aiasGender,
      //           Nombre:             dataForm.name,
      //           NroDoc:             dataForm.documentNumber,
      //           PaisId:             dataUbigeo?.PaisId!,
      //           SalaId:             CodeHallIas.producction,
      //           TipoDocumentoId:    typeDocumentFinal?.idIAS!,
      //           UbigeoProcedenciaId:dataForm.codUbigeo
      //         }
      //        const dataIas = await registerNewUserIas(formatDataIas)

      //         if(dataIas.success){

      //           const dataCodeGenerate:GenerateCode = {
      //             codSala:        CodeHallIas.producction,
      //             countryCode:    dataUbigeoCode?.CodigoTelefonico!,
      //             documentNumber: dataForm.documentNumber,
      //             phoneNumber:    dataForm.phone,
      //             provenance:     dataForm.provenance
      //           }

      //           await generateCode(dataCodeGenerate)
                
      //           reset()
      //           handleMaxYearsOldChange(false)
      //           handleTermsChange(false)
      //           startAnimation()
      //           onOpen()
      //           setPostData(false)
              
      //         }else{
      //           toast.error('No procede registro, cliente ya existe en el sistema.')
                
      //         }
      //     }else{
      //       toast.error('No procede registro, cliente ya existe en el sistema.')

      //     }


      //     await registerNewuser(dataForm)
         
      //     setPostData(false)
          
      //   } catch (error) {
      //     if(axios.isAxiosError(error) && error.response){
      //       setPostData(false)
      //       toast.error(error.response.data.displayMessage)
      //     }
      //   }
      // } else {
      //   toast.error('Debe aceptar las condiciones')
      // }
      if (maxYearsOld == true && terms == true) {
        setPostData(true)
        try {
          const data = await registerNewuser(dataForm)
          console.log(data)
          // toast.success(data.displayMessage, {
          //   position: 'bottom-center',
          //   duration: 4000,
            
          // })
          setPostData(false)
          onOpen()
          startAnimation()
          reset()
          handleMaxYearsOldChange(false)
          handleTermsChange(false)
        } catch (error) {
          if(axios.isAxiosError(error) && error.response){
          toast.error(error.response.data.displayMessage)
  
          }
          setPostData(false)
          
        }
      } else {
        toast.error('Debe aceptar las condiciones')
      }
    }

    return{
        register,
        handleSubmit,
        setValue,
        control,
        sendRegister,
        errors,
        handleMaxYearsOldChange,
        handleTermsChange,
        maxYearsOld,
        terms,
        getInstance,
        postData,
        watch
    }
}