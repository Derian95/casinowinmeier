//Informacion de la sala para enviar al IAS
export enum CodeHallIas{
    development = 103,
    producction = 103
}

//Id de la sala que recibe el gestor
// development = 2006,
// producction = 1007
export enum CodeHallManager{
    development = 1007,
    producction = 1007
}


//encriptado del id de la sala que se va  a usar para obtener la información
// development = 'u3c63LQbkhE',
// producction = 'yZC48xGHknc'  
export enum EncryptedIdHallManager{
    development = 'yZC48xGHknc',
    producction = 'yZC48xGHknc'  
}

//Encriptado del campo provenance para el registro de nuevos clientes
// development = 'OHFTPSIiCZM',
// producction = 'KF7UHRfR'
export enum EncryptedCodeProvenance{
    development = 'KF7UHRfR',
    producction = 'KF7UHRfR'
}

