export interface ClientVerify{
    documentNumber:         string
	idDocumentType:         number
	phoneNumber:            string
	codsala:                number
}


export interface ClientVerifyResponse{
    success:            boolean
    displayMessage:     string
    clientExists:       boolean 
}