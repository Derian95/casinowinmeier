import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/modal";
import { FC } from "react";
import { useUiGlobalStore } from "../../store/uiStore";

interface ModalPoliticsProps {}

export const ModalPolitics: FC<ModalPoliticsProps> = ({}) => {
  const { modalPolitics, setModalPolitics } = useUiGlobalStore();
  return (
    <Modal
      size="3xl"
      isOpen={modalPolitics}
      onClose={setModalPolitics}
      isDismissable={true}
      className="p-2 overflow-y-auto h-full "
    >
      <ModalContent>
        <>
          <ModalHeader className="flex flex-col gap-1 text-center">
            POLÍTICAS DE PRIVACIDAD WM CLUB – CASINO WINMEIER
          </ModalHeader>
          <ModalBody>
            <p>
              Le informamos que los datos personales proporcionados al WM
              CLUB quedan incorporados al banco de datos de clientes. Dicha
              información se utilizará para la gestión de los productos y/o
              servicios solicitados y/o contratados. Asimismo, el firmante
              autoriza a utilizar, en tanto esta autorización no sea revocada,
              sus datos personales, que hubieran sido proporcionados
              directamente o aquellos que pudieran encontrarse en fuentes
              accesibles para el público; para tratamientos que supongan
              desarrollo de acciones comerciales (vía medio físico, electrónico
              o telefónico) personalizadas o generales, autorizándose
              expresamente la remisión de emails y/o mensajes de texto y/o
              mensajes de whatsapp y/o llamadas telefónicas sobre información
              publicitaria, promociones, ofertas y/u otras de interés. Se
              informa al titular de los datos personales, que puede revocar la
              autorización para el tratamiento de sus datos personales en
              cualquier momento, de conformidad con lo previsto en la Ley de
              Protección de Datos Personales (Ley No. 29733) y su Reglamento
              (Decreto Supremo No. 003-2013-JUS). Para ejercer este derecho, o
              cualquier otro previsto en dichas normas, incluyendo los de
              acceso, rectificación u oposición, el titular de datos personales
              podrá presentar su solicitud en cualquiera de los módulos de KEOPS
              CLUB.
            </p>

            <p>
              Mediante su aceptación online usted declara haber recibido y/o
              tenido acceso al Reglamento WM CLUB, habiendo revisado y
              aceptado sus políticas de privacidad, términos y condiciones.
            </p>
          </ModalBody>
        </>
      </ModalContent>
    </Modal>
  );
};
