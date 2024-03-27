import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/modal";
import { FC } from "react";
import { FormRegister } from "../../sections";
import { useModalStore } from "../../sections/register/store/modalRegisterStore";

export interface ModalRegisterProps {}

export const ModalRegister: FC<ModalRegisterProps> = ({}) => {
  const { isOpenModalRegister, setModalRegister } = useModalStore();
  return (
    <Modal
      size="3xl"
      isOpen={isOpenModalRegister}
      onClose={() => setModalRegister(false)}
      isDismissable={false}
      className="p-2 overflow-y-auto h-full "

    >
      <ModalContent>
        <>
          <ModalHeader className="flex flex-col gap-1 text-center">
            FORMULARIO DE REGISTRO
          </ModalHeader>
          <ModalBody>
            <FormRegister />
          </ModalBody>
        </>
      </ModalContent>
    </Modal>
  );
};
