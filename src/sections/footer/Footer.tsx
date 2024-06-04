import { FC } from "react";
import { useCasinoStore } from "../../store/casinoStore";
import libro from '../../assets/footer/ter.png'
// import { useUiGlobalStore } from "../../store/uiStore";
import { Link } from "react-router-dom";
interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  const { dataCasino } = useCasinoStore();
  // const { setModalPolitics, setModalTerms, setModalKeops } =useUiGlobalStore()
  return (
    <footer className="bg-[#1a1a1a] py-20 grid place-items-center">
      <div className="mx-auto children p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <img
                src={dataCasino?.generalData.logoPathWeb}
                className="h-28 mr-3"
                alt="Keops Logo"
              />
            </a>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:gap-20 sm:grid-cols-2">
            <div>
              <h5 className="mb-6 text-sm font-semibold uppercase text-white">
                Políticas
              </h5>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                <Link  className="hover:underline hover:cursor-pointer" target="_blank" to={'tyc-bienvenido-a-ganar'}>
                T&C de la promoción "Bienvenido a Ganar"
                  </Link>
                  {/* <p className="hover:underline hover:cursor-pointer" onClick={setModalKeops}>
                  T&C de la promoción "Bienvenido a Ganar" 
                  </p> */}
                </li>
                <li className="mb-4">
                  <Link  className="hover:underline hover:cursor-pointer" target="_blank" to={'reglamento'}>
                  Reglamento WM Club
                  </Link>
                  {/* <p className="hover:underline hover:cursor-pointer" onClick={setModalTerms}>
                  T&C WM Club
                  </p> */}
                </li>
                <li className="mb-4">
                <Link  className="hover:underline hover:cursor-pointer" target="_blank" to={'politicas'} >
                T&C y Políticas de Privacidad WM Club
                </Link>
                  {/* <p className="hover:underline hover:cursor-pointer" onClick={setModalPolitics}>
                  Políticas de Privacidad WM Club
                  </p> */}
                </li>
              </ul>
            </div>

            <div>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4 ">
                  <a
                    href="http://40.122.134.6/IAS/ReclamacionesNuevo?id=103"
                    target="_blank"
                    className="hover:underline flex items-center justify-between gap-8"
                  >
                    <img src={libro} alt='' className='w-40' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6  sm:mx-auto border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <h6 className="text-sm sm:text-center text-gray-400">
            © 2024 Casino Winmeier todos los derechos reservados.
          </h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
