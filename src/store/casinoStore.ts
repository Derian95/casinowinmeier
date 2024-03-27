
import { create } from 'zustand'
import { DataCasino } from '../interfaces'

  

interface CorporationState{
    dataCasino:             DataCasino | null
    setDataCasino:          (data:DataCasino | null)=>void
    token:                  string
    setDataToken:           (data:string )=>void

}

export const useCasinoStore = create<CorporationState>( set => ({

    dataCasino:                 null,
    setDataCasino:              (obj) =>set({ dataCasino:obj}),
    token:                      '',
    setDataToken:               (obj)=>set({token:obj})

})) 