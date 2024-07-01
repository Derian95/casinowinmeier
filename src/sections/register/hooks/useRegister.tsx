import { useForm } from "react-hook-form";
import { useConditions, useConfettiAnimation } from ".";
import {
  ClientVerify,
  CodeHallIas,
  GenerateCode,
  RegisterData,
} from "../models";
import { useModalSuccessStore } from "../store/modalSuccess";
import {
  generateCode,
  registerNewUserIas,
  registerNewuser,
  verifyClient,
  verifycampaign,
} from "../services/actions";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import { RegisterIas } from "../models/iasRegister";
import dataCountries from "../data/country.json";
import dataDocument from "../data/document.json";

export const useRegister = () => {
  const [postData, setPostData] = useState<boolean>(false);
  const { handleMaxYearsOldChange, handleTermsChange, maxYearsOld, terms } =
    useConditions();
  const { startAnimation, getInstance } = useConfettiAnimation();
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
    console.log(dataForm)
    const dataGestor: RegisterData = { ...dataForm }
    const idDocumentData = dataForm.documentType
    const dataUbigeo = dataCountries.find(
      (p) => p.CodUbigeo == dataForm.codUbigeo
    );
    const dataUbigeoCode = dataCountries.find(
      (p) => p.CodUbigeo == dataForm.codUbigeoNumber
    );
    const typeDocumentFinal = dataDocument.find(
      (p) => p.idDocumentType == idDocumentData
    );

    dataGestor.lastName = dataForm.firstName + " "+ dataForm.lastName;
    dataGestor.nationality = dataUbigeo?.Nombre!
    dataForm.nationality = dataUbigeo?.Nombre!;
    console.log("ias",dataForm)
    console.log("gestor",dataGestor)

    if (maxYearsOld == true && terms == true) {
      setPostData(true);

      try {
        const verifyCampaing = await verifycampaign(CodeHallIas.producction);
        console.log(verifyCampaing);
        if (verifyCampaing.campaniaExists) {
          const dataVerify: ClientVerify = {
            codsala: CodeHallIas.producction,
            documentNumber: dataForm.documentNumber,
            phoneNumber: dataForm.phone,
            idDocumentType: typeDocumentFinal?.idIAS!,
          };
          const clientVerifyIAS = await verifyClient(dataVerify);
          console.log("RESPUESTA verificar cliente ias", clientVerifyIAS)

          if (!clientVerifyIAS.clientExists) {
            // dataGestor.lastName=lastnameGestor
            const registerGestor = await registerNewuser(dataGestor);
            console.log("RESPUESTA GESTOR", registerGestor)
            if (registerGestor.success) {
              let aiasGender = "";
              if (dataForm.gender == "0") {
                aiasGender = "M";
              } else if (dataForm.gender == "1") {
                aiasGender = "F";
              }
              const formatDataIas: RegisterIas = {
                ApelMat: dataForm.lastName,
                Celular1: dataForm.phone,
                ApelPat: dataForm.firstName,
                CodigoPais: dataUbigeoCode?.CodigoTelefonico!,
                FechaNacimiento: dataForm.birthDate,
                Genero: aiasGender,
                Nombre: dataForm.name,
                NroDoc: dataForm.documentNumber,
                PaisId: dataUbigeo?.PaisId!,
                SalaId: CodeHallIas.producction,
                TipoDocumentoId: typeDocumentFinal?.idIAS!,
                UbigeoProcedenciaId: dataForm.codUbigeo,
              };
              const dataIas = await registerNewUserIas(formatDataIas);
            console.log("RESPUESTA nuevo registro ias", dataIas)

              if (dataIas.success) {
                const dataCodeGenerate: GenerateCode = {
                  codSala: CodeHallIas.producction,
                  countryCode: dataUbigeoCode?.CodigoTelefonico!,
                  documentNumber: dataForm.documentNumber,
                  phoneNumber: dataForm.phone,
                  provenance: dataForm.provenance,
                };

                const codeResponse = await generateCode(dataCodeGenerate);
                console.log("RESPUESTA ias generar codigo", codeResponse)

                reset();
                handleMaxYearsOldChange(false);
                handleTermsChange(false);
                startAnimation();
                onOpen();
                setPostData(false);
              } else {
                toast.error(
                  dataIas.displayMessage
                );
              }
            }
          }
          else{
            toast.error(
              clientVerifyIAS.displayMessage
            );
          }
          setPostData(false);
        } else {
          setPostData(false);
          toast.error(
            "En estos momentos no se puede registrar, intentelo mas tarde"
          );
        }
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          setPostData(false);
          toast.error(error.response.data.displayMessage);
        }
      }
    } else {
      toast.error("Debe aceptar las condiciones");
    }
  };

  return {
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
    watch,
  };
};
