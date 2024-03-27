import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/modal";
import { FC } from "react";
import { useModalSuccessStore } from "./store/modalSuccess";
import { useModalStore } from "./store/modalRegisterStore";

interface ModalSuccessProps {
  
}

export const ModalSuccess: FC<ModalSuccessProps> = () => {
	const {isOpen, onClose} = useModalSuccessStore();
	const { setModalRegister } = useModalStore();
    
    const closeModals=() => {
        setModalRegister(false)
        onClose()
    }
  return (
    <Modal size="sm" isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-center">
              REGISTRO EXITOSO
            </ModalHeader>
            <ModalBody>
              <p className="text-center">
                Acércate al casino, solicita tu tarjeta y reclama tu bono
              </p>
            </ModalBody>
            <ModalFooter className="m-auto">
              <button
                onClick={closeModals}
                className={` bg-metal py-4 px-8 font-bold text-base`}
              >
                Aceptar
              </button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
