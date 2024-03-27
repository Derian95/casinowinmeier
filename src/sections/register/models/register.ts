export interface RegisterData  {
	idCasino:           number
	name:               string
	firstName: 			string
	lastName:           string
	documentType:       number
	documentNumber:     string
	nationality:        string
	birthDate:          string
	gender:             string
	idDistrict:         number
	phone:              string
	email:              string
	provenance:         string
	codUbigeo?:			any
	codUbigeoNumber?:	any
}




export interface ResponseRegisterData{
	success:			boolean
	displayMessage:		string
	code:				number
}