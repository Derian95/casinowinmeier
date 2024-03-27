import { create } from 'zustand'


type ModalStore = {
  isOpenModalRegister: boolean;
  setModalRegister: (isOpen: boolean) => void;
};

export const useModalStore = create<ModalStore>((set) => ({
  isOpenModalRegister: false,
  setModalRegister: (isOpen) => set({ isOpenModalRegister: isOpen }),
}));