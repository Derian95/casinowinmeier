
export interface DepartmentResponse {
	success: boolean
	data: Department[]
}
export interface Department {
	idDepartment: number
	ubigeoCode: string
	name: number
}

export interface ProvinceResponse {
	success: boolean
	data: Province[]
}
export interface Province {
	idProvince: number
	ubigeoCode: string
	name: string
}

export interface DistrictResponse {
	success: boolean
	data: District[]
}
export interface District {
	idDistrict: number
	ubigeoCode: string
	name: string
}