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
          <ModalHeader className="flex flex-col gap-1  text-3xl">
          Consentimiento Expreso
          </ModalHeader>
          <ModalBody>
      <p className="mb-4">El firmante autoriza expresamente la utilización de sus datos personales conforme a los términos de la Política de Privacidad y Tratamiento de Datos Personales, en tanto esta autorización no sea revocada, sus datos personales, que hubieran sido proporcionados directamente o aquellos que pudieran encontrarse en fuentes accesibles para el público; para tratamientos que supongan desarrollo de acciones comerciales (vía medio físico, electrónico o telefónico) personalizadas o generales, autorizándose expresamente la remisión de emails, mensajes de texto, mensajes de whatsapp y/o llamadas telefónicas sobre información publicitaria, promociones, ofertas y/u otras de interés.</p>
      <p className="mb-4">Mediante su aceptación, usted declara haber recibido y/o tenido acceso al REGLAMENTO CLUB, habiendo revisado y aceptado sus políticas de privacidad, términos y condiciones que se detalla a continuación:</p>
          
      <h1 className="text-2xl font-bold mb-4">Términos y Condiciones WM CLUB – CASINO WINMEIER</h1>
      <p>WM CLUB es un programa de beneficios, privilegios y oportunidades para las personas que han optado gratuita y voluntariamente a afiliarse como socios. Nuestro Club de socios se encuentra formado por cuatro categorías o niveles, que se identificarán con distintos colores de tarjetas: Categoría Classic (color anaranjado), Categoría Silver (color gris), Categoría Gold (color dorado) y Categoría Black (color negro).</p>
      <p>Su membresía es válida, después de afiliarse y obtener gratuitamente la tarjeta WM CLUB, la cual será personalizada al habernos proporcionado los datos solicitados en el formulario online<a href="https://casinokeops.pe/#register">https://casinokeops.pe/#register .</a></p>
      <p>Usted empezará por nuestra categoría o nivel, al que denominamos como Classic. Conforme vaya acumulando puntos por su juego en nuestra sala de juegos Keops en Trujillo y Casino Winmeier en Chiclayo o consumo en hotel, restaurante y bar Winmeier, según lo indicado a las normas establecidas en el Reglamento CLUB podrá acceder a las otras categorías y cambiar de Classic a Silver, luego a Gold y finalmente a Black, que es el máximo y ultimo nivel.</p>
      <p>Los puntos que un socio de WM Club acumule como resultante de su juego o consumo, tendrán vigencia de un año a partir de su obtención. Para consultas sobre las condiciones de vigencia de los puntos, permanencia en categorías y otros aspectos relacionados, revisar el REGLAMENTO CLUB.</p>
      <p>Usted podrá informarse con total libertad y hacer de su conocimiento los beneficios, privilegios, ventajas oportunidades, entre otros, de nuestro CLUB de socios en el REGLAMENTO CLUB.</p>
          
      <h1 className="text-2xl font-bold mb-4">Políticas de Privacidad WM CLUB – CASINO WINMEIER</h1>
      <p><strong>1. Introducción</strong></p>
      <p>ANDEAN SLOTS S.A.C., con RUC N° 20486245027, con domicilio en Av. Guillermo Olguín N° 211, Oficina 303, Santiago de Surco, Lima (en adelante, “GLADCON GROUP”), recoge en este documento su Política de Privacidad.</p>
      <p>GLADCON GROUP asegura la máxima reserva y protección de aquellos datos de carácter personal que los usuarios o potenciales usuarios, con la finalidad de hacer uso de los servicios, nos proporcionen mediante nuestro sitio Web y/u otros mecanismos.</p>
      <p><strong>2. Objetivo y finalidad</strong></p>
      <p>GLADCON GROUP es consciente de la elevada importancia que tiene la privacidad de nuestros usuarios y de todas aquellas personas que se interesan por los servicios ofrecidos. Siendo consecuentes con esta consideración, tenemos el compromiso de respetar su privacidad y proteger la confidencialidad de su información privada y datos personales. Por tal motivo, mediante la presente Política de privacidad, damos a conocer a nuestros usuarios, la manera en que se recogen, tratan y se protegen los datos personales brindados en GLADCON GROUP.</p>
      <p>La información personal privada no incluye información que está disponible a través de fuentes accesibles al público. Se entiende por tales los medios de comunicación electrónica, óptica y de otra tecnología concebidos para facilitar información al público y abiertos a la consulta general, los diarios y revistas, los medios de comunicación social, las listas profesionales, los repertorios de jurisprudencia anonimizados, los Registros Públicos administrados por la Superintendencia Nacional de Registros Públicos así como todo otro registro o banco de datos calificado como público conforme a ley, las entidades de la Administración Pública en relación a la información que deba ser entregada en aplicación de la Ley No 27806, Ley de Transparencia y Acceso a la Información Pública.</p>
      <h2 className="text-xl font-bold mb-4">3. Legislación</h2>
      <p><strong>De acuerdo con la Ley N° 29733 – Ley de Protección de Datos Personales (en adelante, la “Ley”) y su Reglamento, aprobado por el Decreto Supremo No. 003-2013-JUS, se entiende por datos personales toda información sobre una persona natural que la identifica o hace identificable a través de medios que pueden ser razonablemente utilizados.</strong></p>
      <p>Por otro lado, por tratamiento de datos personales se entiende como cualquier operación o procedimiento técnico, automatizado o no, que permite la recopilación, registro, organización, almacenamiento, conservación, elaboración, modificación, extracción, consulta, utilización, bloqueo, supresión, comunicación por transferencia o por difusión o cualquier otra forma de procesamiento que facilite el acceso, correlación o interconexión de los datos personales.</p>
      <p>GLADCON GROUP desarrolla su Política de tratamiento de datos personales en atención a los principios rectores establecidos en la Ley mencionados a continuación:</p>
      <ul className="list-disc pl-8">
        <li><strong>Principio de legalidad:</strong> se rechaza la recopilación de los datos personales de nuestros usuarios por medios fraudulentos, desleales o ilícitos.</li>
        <li><strong>Principio de consentimiento:</strong> en el tratamiento de los datos personales de nuestros usuarios mediará su consentimiento.</li>
        <li><strong>Principio de finalidad:</strong> Los datos personales de nuestros usuarios se recopilarán para una finalidad determinada, explícita y lícita, y no se extenderá a otra finalidad que no haya sido la establecida de manera inequívoca como tal al momento de su recopilación.</li>
        <li><strong>Principio de proporcionalidad:</strong> todo tratamiento de datos personales de nuestros usuarios será adecuado, relevante y no excesivo a la finalidad para la que estos hubiesen sido recopilados.</li>
        <li><strong>Principio de calidad:</strong> Los datos personales serán veraces, exactos y, en lo posible, actualizados, necesarios, pertinentes y adecuados respecto de la finalidad para la que fueron recopilados.</li>
        <li><strong>Principio de seguridad:</strong> se conservarán de forma tal que se garantice su seguridad y solo por el tiempo necesario para cumplir con la finalidad del tratamiento.</li>
      </ul>
      <p>GLADCON GROUP y, en su caso, los encargados de tratamiento cuentan con las medidas de seguridad apropiadas y acordes con el tratamiento que se vaya a efectuar, así como adoptarán las medidas técnicas, organizativas y legales necesarias para garantizar confidencialidad de los datos personales.</p>
      <h2 className="text-xl font-bold mb-4">4. Información sobre datos personales</h2>
      <p>El usuario queda informado y autoriza libre y voluntariamente a GLADCON GROUP para recolectar, almacenar, conservar, acceder, usar, suprimir o actualizar sus Datos Personales para sus actividades en el Perú. En ese sentido, los datos personales a los que GLADCON GROUP tenga acceso como consecuencia de los servicios que brinda o mediante el llenado de diferentes formularios, se incorporarán al correspondiente “Banco de Datos Personales”, conformando el conjunto organizado de datos personales de usuarios, creado por GLADCON GROUP y registrado en el Registro Nacional de Protección de Datos Personales.</p>
      <p>Los datos personales facilitados por los usuarios serán tratados con total confidencialidad y sólo podrán ser conocidos y manejados por el personal de GLADCON GROUP que necesite conocer dicha información para brindar los servicios ofrecidos. GLADCON GROUP se compromete a guardar secreto profesional respecto de los mismos y garantiza el deber de guardarlos adoptando todas las medidas de seguridad necesarias. No será necesaria la autorización cuando los datos personales sean necesarios para la ejecución de una relación contractual en la que el Titular de Datos Personales sea parte.</p>
      <p>Si los datos registrados resultaran inexactos, en todo o en parte, o incompletos, GLADCON GROUP podrá actualizarlos y/o sustituirlos por los correspondientes datos rectificados o completados.</p>
      <p>Los datos personales solicitados a los usuarios mediante diferentes formularios del sitio Web o físicos, son datos básicos de contacto y son adecuados, pertinentes y no excesivos en relación con la finalidad para los que se recogen.</p>
          
      <h2 className="text-xl font-bold mb-4">5. Finalidad del tratamiento de los datos personales</h2>
      <p>El usuario autoriza expresamente a GLADCON GROUP al uso de sus datos para el desarrollo de acciones comerciales, contractuales, marketing, publicitarias, promocionales, administrativas y para el soporte a usuarios, sean de carácter general o adaptado a sus características personales. Dichas acciones podrán ser realizadas por correo electrónico, mensajes de texto, comunicación telefónica u otro medio de comunicación equivalente. Los datos personales serán cancelados cuando hayan dejado de ser necesarios para las finalidades para las cuales han sido recogidos. Sin embargo, se conservarán durante el tiempo en que pueda exigirse algún tipo de responsabilidad a GLADCON GROUP derivada de esta relación con los usuarios. No se considerará incompatible el tratamiento posterior con fines históricos, estadísticos o científicos.</p>
      
      <h2 className="text-xl font-bold mt-6 mb-4">6. Transferencia de datos personales a nivel nacional o internacional</h2>
      <p>El usuario autoriza la transferencia de sus datos a las empresas a nivel nacional o internacional (flujo transfronterizo) relacionadas y/o asociadas a GLADCON GROUP para poder gestionar adecuadamente los servicios solicitados por los usuarios y las gestiones que se deriven posteriormente, en relación a la finalidad indicada en los apartados anteriores, extendiendo para ello a éstas la autorización expresa para su uso. Estos datos personales también pueden ser comunicados a las entidades administrativas, autoridades judiciales y/o policiales, siempre y cuando esté establecido por Ley.</p>
      <p>En ese sentido, GLADCON GROUP garantiza el nivel adecuado de protección de los datos personales de los usuarios para la transferencia de datos personales, de acuerdo a una protección equiparable a lo previsto por esta Ley o por los estándares internacionales en la materia.</p>


      <h2 className="text-xl font-bold mb-4">7. Seguridad de los datos personales</h2>
      <p>En cumplimiento de la normativa vigente, la Directiva de Seguridad de la Información aprobada por la Resolución Directoral No. 019-2013-JUS/DGPDP de la Autoridad Nacional de Protección de Datos Personales, GLADCON GROUP ha adoptado las medidas técnicas y organizativas de seguridad y confidencialidad apropiadas a la categoría de los datos personales, necesarias para mantener el nivel de seguridad requerido, con el objetivo de evitar en la medida de lo posible la alteración, pérdida o el tratamiento o acceso no autorizado que puedan afectar a la integridad, confidencialidad y disponibilidad de la información.</p>
      <p>Sin embargo, la transmisión de información mediante las redes de comunicación y de Internet no es totalmente segura; por eso, y a pesar de que GLADCON GROUP realizará sus mejores esfuerzos para proteger los datos personales, no podrá garantizar la seguridad de los mismos durante el tránsito hasta el sitio Web. Toda la información que los usuarios de Internet faciliten por este medio, se enviará por su cuenta y riesgo.</p>
      
      <h2 className="text-xl font-bold mt-6 mb-4">8. Ejercicio de los Derechos de Acceso, Rectificación, Cancelación y Oposición</h2>
      <p>Los Usuarios de Internet que hayan facilitado datos personales a GLADCON GROUP pueden dirigirse a esta, con el fin de poder ejercer sus derechos de información, de acceso, de actualización, inclusión, rectificación y supresión, de impedir el suministro de sus datos personales, de oposición al tratamiento o de tratamiento objetivo de los datos, en los términos recogidos en la legislación vigente. Dichos derechos solo podrán ser ejercidos por el titular de los datos personales o su apoderado, de conformidad con la ley.</p>
      <p>Para poder ejercer estos derechos, los usuarios deberán dirigirse a la siguiente dirección de correo electrónico datos@gladcon.com con la referencia “Protección de Datos Personales”, especificando sus datos, acreditando su identidad y los motivos de su solicitud. Quien suscribe la solicitud deberá anexar copia simple de los documentos que acrediten la identidad del titular (Documento Nacional de Identidad o documento equivalente) o en su caso, la del apoderado, así como copia simple del poder otorgado por vía notarial cuando corresponda.</p>
      <p>Asimismo, GLADCON GROUP informa a sus usuarios la existencia de la vía administrativa para hacer valer sus derechos a ejercitar ante la Autoridad Nacional de Protección de Datos o jurisdiccionales ante el Poder Judicial a los efectos de la correspondiente acción de habeas data.</p>
      
      <h2 className="text-xl font-bold mt-6 mb-4">9. Otros</h2>
      <p>Para realizar cualquier tipo de consulta respecto a esta Política puede dirigirse a la siguiente dirección de correo electrónico: datos@gladcon.com</p>
      
      <h2 className="text-xl font-bold mt-6 mb-4">10. Vigencia y modificación de la presente Política de Protección de Datos Personales</h2>
      <p>La Política de Protección de Datos Personales de GLADCON GROUP es actualizada constantemente, por lo que GLADCON GROUP se reserva el derecho a modificar su Política en el supuesto de que exista un cambio en la legislación vigente, doctrinal, jurisprudencial o por criterios propios empresariales. Si se introdujera algún cambio en esta Política, el nuevo texto se publicará en nuestros establecimientos comerciales.</p>
          </ModalBody>
        </>
      </ModalContent>
    </Modal>
  );
};
