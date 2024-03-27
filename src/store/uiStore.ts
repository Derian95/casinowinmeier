
import { create } from 'zustand'


interface UiGlobalStoreState{
    modalTerms:                 boolean
    modalPolitics:              boolean
    modalKeops:                 boolean
    setModalKeops:              ()=>void
    setModalTerms:              ()=>void
    setModalPolitics:           ()=>void

}

export const useUiGlobalStore = create<UiGlobalStoreState>( (set,get) => ({

    modalTerms:                 false,
    modalPolitics:              false,
    modalKeops:              false,
    setModalKeops:              () => set({ modalKeops: !get().modalKeops }),
    setModalTerms:              () => set({ modalTerms: !get().modalTerms }),
    setModalPolitics:           () => set({ modalPolitics: !get().modalPolitics }),

})) 