import { useEffect, useState } from "react";
import { Department,District, Province } from "../models";
import { fetchDepartments, fetchDistricts, fetchProvinces } from "../services/actions";



export const useLocationData = ()=>{

    const [departments, setDepartments] = useState<Department[]>([])
	const [provinces, setProvinces] = useState<Province[]>([])
	const [districts, setDistricts] = useState<District[]>([])

    useEffect(() => {
        const getDepartments = async () => {
            const data = await fetchDepartments();
            setDepartments(data)
        }
        
        getDepartments()
        
    }, []);

    const getProvinces = async (idDepartment: string) => {
        try {
            setDistricts([])
            const data = await fetchProvinces(idDepartment)
            setProvinces(data)

        } catch (error) {
            console.error('Error fetching provinces:', error);
        }
      };

    const getDistricts = async (idProvince: string) => {
        try {
            const data = await fetchDistricts(idProvince)
            setDistricts(data)
        } catch (error) {
          console.error('Error fetching districts:', error);
        }
      };

      return{
        getDistricts,
        getProvinces,
        departments,
        provinces,
        districts
      }
}


