// locationActions.ts

import { casinoApi, casinoApiWeb } from "../../../api/apiCasino";
import { iasApi } from "../../../api/apiIAS";
import { CampaignVerifyResponse, ClientVerify, ClientVerifyResponse, Department, DepartmentResponse, District, DistrictResponse, GenerateCode, Province, ProvinceResponse, RegisterData, RegisterIas, RegisterIasResponse, ResponseRegisterData } from "../models";


export const fetchDepartments = async (): Promise<Department[]> => {
  try {
    const response = await casinoApi.get<DepartmentResponse>('/ubigeo/departments');
    return response.data.data; 
  } catch (error) {
    console.error('Error fetching departments:', error);
    throw error; 
  }
};

export const fetchProvinces = async (idDepartment: string): Promise<Province[]> => {
  try {
    const strIdDepartment = parseInt(idDepartment);
    const response = await casinoApi.get<ProvinceResponse>(`/ubigeo/departments/${strIdDepartment}/provinces`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching provinces:', error);
    throw error;
  }
};

export const fetchDistricts = async (idProvince: string): Promise<District[]> => {
  try {
    const strIdProvince = parseInt(idProvince);
    const response = await casinoApi.get<DistrictResponse>(`/ubigeo/provinces/${strIdProvince}/districts`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching districts:', error);
    throw error;
  }
};


export const registerNewuser = async ( newUser:RegisterData  ): Promise<ResponseRegisterData>=> {
  try {
    const dataRegister = await casinoApiWeb.post<ResponseRegisterData>('client', newUser)
    return dataRegister.data;
  } catch (error) {
    console.error('Error fetching districts:', error);
    throw error;
  }
};


export const registerNewUserIas = async (newUserIAS : RegisterIas):Promise<RegisterIasResponse> =>{
  try {
    const dataRegisterIas = await iasApi.post<RegisterIasResponse>('/AsistenciaCliente/GuardarClienteCampaniaWhatsApp',newUserIAS)
    return dataRegisterIas.data
  } catch (error) {
    throw error;
  } 
}

export const verifyClient = async (verifyData : ClientVerify):Promise<ClientVerifyResponse> =>{
  try {
    const dataRegisterIas = await iasApi.post<ClientVerifyResponse>('CampaniaCliente/ExisteCliente',verifyData)
    return dataRegisterIas.data
  } catch (error) {
    throw error;
  }
}

export const generateCode = async (data : GenerateCode):Promise<ClientVerifyResponse> =>{
  try {
    const dataRegisterIas = await iasApi.post<ClientVerifyResponse>('/CampaniaCliente/GenerarCodigoCliente',data)
    return dataRegisterIas.data
  } catch (error) {
    throw error;
  }
}



export const verifycampaign = async (codSala:number):Promise<CampaignVerifyResponse> =>{
  try {
    const data={
      codSala : codSala
    }
    const dataRegisterIas = await iasApi.post<CampaignVerifyResponse>('/CampaniaCliente/ExisteCampaña',data)
    return dataRegisterIas.data
  } catch (error) {
    throw error;
  }
}