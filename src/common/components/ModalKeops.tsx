import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/modal';
import  { FC } from 'react';
import { useUiGlobalStore } from '../../store/uiStore';

interface ModalKeopsProps {
  
}

export const ModalKeops: FC<ModalKeopsProps> = ({}) => {
    const { modalKeops, setModalKeops } = useUiGlobalStore();
    return (
      <Modal
        size="3xl"
        isOpen={modalKeops}
        onClose={setModalKeops}
        isDismissable={true}
        className="p-2 overflow-y-auto h-full "
      >
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1 text-center">
            TÉRMINOS Y CONDICIONES PROMOCIÓN AFILIACIÓN GRATUITA A WM CLUB – CASINO KEOPS BY WINMEIER
            </ModalHeader>
            <ModalBody>
            <p>
						Antes de la participación es muy importante leer las bases de la
						promoción que se describe a continuación:
					</p>

					<p className='font-bold'>CONSIDERACIONES GENERALES:</p>
					<ol>
						<li className=' mb-2'>
							<span className='golden-dot'>&#9679;</span> La presente base
							aplica para la Promoción AFILIACIÓN GRATUITA A WM CLUB, de ahora
							en adelante denominada LA PROMOCIÓN. Los participantes podrán
							acceder a través de una afiliación web a una tarjeta Classic WM
							Club totalmente gratis.
						</li>
						<li className=' mb-2'>
							<span className='golden-dot'>&#9679;</span> LA PROMOCIÓN se
							encuentra sujeta a cambios sin previo aviso. En caso considere el
							establecimiento, algunas de las disposiciones previstas pueden
							variar.
						</li>
						<li className=' mb-2'>
							<span className='golden-dot'>&#9679;</span> LA PROMOCIÓN se puede
							disolver en cualquier instante, siempre y cuando, se comunique
							oportunamente a todos los usuarios y no perjudique los intereses
							de los participantes.
						</li>
					</ol>

					<ol>
						<li className=' mb-2'>
							<strong>
								<span className='golden-dot'>1.</span> PARTICIPANTES:{' '}
							</strong>
							Podrán participar personas naturales mayores de 18 años cumplidos
							al momento de la participación, residentes solo en Trujillo y que
							no se encuentren afiliados a WM Club (clientes nuevos). Los
							participantes no deberán estar en el registro de ludópatas de
							MINCETUR. No podrán participar los trabajadores de la Corporación
							Gladcon Group, ni familiares de los mismos (hasta el tercer grado
							de consanguinidad).
						</li>
						<li className=' mb-2'>
							<strong>
								<span className='golden-dot'>2.</span> VIGENCIA:{' '}
							</strong>
							Del 08 de noviembre al 10 de diciembre 2023.
						</li>
						<li className=' mb-2'>
							<strong>
								<span className='golden-dot'>3.</span> CÓMO PARTICIPAR:{' '}
							</strong>
							A través de un código QR o dominio podrán ingresar al landing page
							de Keops y registrar sus datos. Es indispensable aceptar los
							términos y condiciones, Políticas de privacidad y Tratamiento de
							sus datos.
						</li>
						<li className=' mb-2'>
							<strong>
								<span className='golden-dot'>4.</span> PREMIO:{' '}
							</strong>
							Los clientes, por su afiliación al WM Club, ganarán un bono
							promocional de S/50 no redimible, personal e intransferible. El
							premio será abonado a su tarjeta de socio nivel Classic. Para
							hacer efectivo el premio los clientes deberán recoger su tarjeta
							en el módulo de WM Club ubicado dentro de la sala de juegos Keops.
						</li>
						<li className=' mb-2'>
							<strong>
								<span className='golden-dot'>5.</span> PROTECCIÓN DE DATOS:{' '}
							</strong>
							La información compartida por los participantes como nombre
							completo, su número de DNI, entre otros (en el caso extraordinario
							que comparta más datos como dirección de hogar) será
							cuidadosamente protegida y no será compartida con terceros.
						</li>
						<li className=' mb-2'>
							<strong>
								<span className='golden-dot'>6.</span> IDENTIFICACIÓN:{' '}
							</strong>
							Para recoger su tarjeta Classic de socio, los clientes afiliados
							deberán acercarse al módulo del WM Club portando su DNI para
							facilitar su inmediata identificación, y evitar confusiones.
						</li>
						<li className=' mb-2'>
							<strong>
								<span className='golden-dot'>7.</span> RENUNCIA DEL PREMIO:{' '}
							</strong>
							La Empresa no se hace responsable si los ganadores no pueden
							recibir su premio por causas o acontecimientos de fuerza mayor o
							si renuncian al derecho de aceptarlo, perdiendo en ambos casos
							todos los derechos que pudieran tener en relación con su premio.
						</li>
					</ol>

					<p>
						<strong></strong>
					</p>
            </ModalBody>
          </>
        </ModalContent>
      </Modal>
    );
  };
  