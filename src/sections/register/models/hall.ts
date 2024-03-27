//Informacion de la sala para enviar al IAS
export enum CodeHallIas{
    development = 103,
    producction = 1007
}

//Id de la sala que recibe el gestor
export enum CodeHallManager{
    development = 1007,
    producction = 1007
}


//encriptado del id de la sala que se va  a usar para obtener la información
export enum EncryptedIdHallManager{
    development = 'yZC48xGHknc',
    producction = 'yZC48xGHknc'
}

//Encriptado del campo provenance para el registro de nuevos clientes
export enum EncryptedCodeProvenance{
    development = 'KF7UHRfR',
    producction = 'KF7UHRfR'
}

