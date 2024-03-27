import { create } from 'zustand'


type ModalSuccessStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useModalSuccessStore = create<ModalSuccessStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));