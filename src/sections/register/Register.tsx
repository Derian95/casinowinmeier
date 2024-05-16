import { FC } from "react";
import { FormRegister } from ".";
import { useCasinoStore } from "../../store/casinoStore";
import { LinksNavbar } from "../header/models";

interface RegisterProps {}

const Register: FC<RegisterProps> = ({}) => {
  const { dataCasino } = useCasinoStore();
  return (
    <section className="section px-5 " id={LinksNavbar.Register}>
      <div className="flex flex-col-reverse lg:flex-row w-full max-w-screen-xl p-2 lg:p-10 shadow-2xl gap-10 rounded-lg">
        <div className="w-full lg:w-7/12  flex justify-center ">
          <FormRegister />
        </div>
        <div className="w-full lg:w-5/12 bg-[#3b3b3b] p-2 lg:p-10  rounded-xl flex flex-col justify-between">
          <div>
          <h1 className="text-3xl sm:text-4xl    w-full  text-center   max-w-96 sm:max-w-full text-white drop-shadow-2xl">
            {/* ¡Compra s/50 */}
            <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold my-2"> ¡Bienvenido a Ganar!</p><p className="font-normal mt-2 max-w-[500px]  m-auto xl:m-0 text-center">Compra S/50 y juega S/100 en bonos con WM Club.</p></h1>
          <h1 className="text-3xl sm:text-5xl    w-full  text-center   max-w-96 sm:max-w-full text-white drop-shadow-2xl font-bold">
     
        {/* Bienvenido  a <br />Ganar */}

          </h1>
          <span className="text-[#c2c2c2] text-sm text-center m-auto w-full block">Válido solo para nuevos socios de WM Club</span>
          </div>

          <div className="flex justify-end">
            <img
              src={dataCasino?.sections.register.imagePathWeb}
              alt=""
              className="w-32 lg:w-full "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
