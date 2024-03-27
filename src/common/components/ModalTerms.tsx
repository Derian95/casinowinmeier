import { FC } from "react";
import { useUiGlobalStore } from "../../store/uiStore";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/modal";

interface ModalTermsProps {}

export const ModalTerms: FC<ModalTermsProps> = ({}) => {
  const { modalTerms, setModalTerms } = useUiGlobalStore();

  return (
    <Modal
      size="3xl"
      isOpen={modalTerms}
      onClose={setModalTerms}
      isDismissable={true}
      className="p-2 overflow-y-auto h-full "

    >
      <ModalContent>
        <>
          <ModalHeader className="flex flex-col gap-1 text-center">
            TÉRMINOS Y CONDICIONES WM CLUB– CASINO WINMEIER
          </ModalHeader>
          <ModalBody>
            <p>
              El WM CLUB es un programa de beneficios, privilegios y
              oportunidades para las personas que han optado gratuita y
              voluntariamente a incorporarse como socios.
            </p>
            <p>
              Nuestro Club de socios se encuentra formado por cuatro categorías
              o niveles, que se identificarán con distintos colores de tarjetas:
              Categoría Classic (color anaranjado), Categoría Silver (color
              gris), Categoría Gold (color dorado) y Categoría Black (color
              negro).
            </p>
            <p>
              Su membresía es válida, después de inscribirse y obtener
              gratuitamente la tarjeta WM CLUB, la cual será personalizada al
              habernos proporcionado los datos solicitados en el formulario
              online
              <a
                className="text-[#E0BB6D] hover:brightness-125"
                href="https://casinokeops.pe"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                https://registro.casinokeops.pe
              </a>
            </p>

            <p>
              Usted empezará por nuestra categoría o nivel, al que denominamos
              como Classic. Conforme vaya acumulando puntos por su juego o
              consumos en cualquiera de nuestros outlets, según lo indicado a
              las normas establecidas en el Reglamento WM CLUB podrá acceder
              a las otras categorías y cambiar de Classic a Silver, luego a Gold
              y finalmente a Black, que es el máximo y ultimo nivel.
            </p>

            <p>
              Los puntos que un integrante del WM CLUB acumule como
              resultante de su juego, o consumos, tendrán vigencia de un año a
              partir de su obtención. Para consultas sobre las condiciones de
              vigencia de los puntos, permanencia en categorías y otros aspectos
              relacionados, revisar el Reglamento WM CLUB.
            </p>

            <p>
              Usted podrá informarse con total libertad y hacer de su
              conocimiento los beneficios, privilegios, ventajas oportunidades,
              entre otros, de nuestro Club de socios en el Reglamento WM
              CLUB.
            </p>
          </ModalBody>
        </>
      </ModalContent>
    </Modal>
  );
};
