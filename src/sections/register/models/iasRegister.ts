export interface RegisterIas {
    Nombre:                 string
    ApelPat:                string
    ApelMat:                string
    TipoDocumentoId:        number
    NroDoc:                 string
    FechaNacimiento:        string
    Genero:                 string
    UbigeoProcedenciaId:    any
    PaisId:                 string
    Celular1:               string
    CodigoPais:             string
    SalaId:                 number
}


export interface RegisterIasResponse{
    success:            boolean
    displayMessage:     string

}