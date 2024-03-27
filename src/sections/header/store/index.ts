
import { create } from 'zustand'

  

interface NavbarState{
    showMenu:            boolean
    setShowMenu:        ()=>void
    setShowMenuVar:     (isOpen: boolean) => void;
   
}

export const useNabvarStore = create<NavbarState>( (set,get) => ({

    showMenu:                   false,
    setShowMenu:                () => set({ showMenu: !get().showMenu }),
    setShowMenuVar:             (isOpen) => set({ showMenu: isOpen }),
    

    
})) 