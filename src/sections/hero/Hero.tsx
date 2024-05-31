import { FC } from "react";
import { Title } from ".";
import { useCasinoStore } from "../../store/casinoStore";
import { LinksNavbar } from "../header/models";
import { Button } from "../../common/components";
// import imageBg from "../../assets/hero/bg3.webp";
import imgUrl from "../../assets/hero/newBgWM.svg";
// import video from '../../assets/hero/Secuencia 01_1.webm'
interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  const { dataCasino } = useCasinoStore();
  return (
    <section
      style={{
        backgroundImage: `url("${imgUrl}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className=" bg-[#2E2E2E] relative h-fit   min-h-screen  grid place-items-center  overflow-hidden "
      id={`${LinksNavbar.Home}`}
    >
      <div className="relative   w-full h-full grid place-items-center bg-white md:bg-transparent max-w-screen-2xl   ">
        <div className=" h-full w-full bg-[#2E2E2E]  xl:bg-transparent ">
          <div className="flex w-full h-full flex-col xl:flex-row gap-10 px-5">
            <div className="w-full xl:w-2/4 flex flex-col xl:items-start items-center justify-center gap-10 pt-28 xl:pt-0">
              <Title message={""} />
              <p className="text-white text-sm">
                *Válido solo para nuevos socios de WM Club.
              </p>
              <Button
                type={"link"}
                href={`#${LinksNavbar.Register}`}
                name="Regístrate aquí y gana"
              />
            </div>
            <div className="w-9/12 xl:w-2/4  m-auto grid place-items-center  pb-10">
              <video autoPlay muted loop className="rounded-xl scale-95">
                <source
                  src={dataCasino?.generalData.promotionalVideoPathWeb}
                  type="video/webm"
                />
                <source
                  src={dataCasino?.generalData.promotionalVideoPathWeb}
                  type='video/mp4; codecs="hvc1"'
                />
              </video>
            </div>
          </div>
        </div>

       
      </div>
      <p className="absolute bottom-6 sm:bottom-4 lg:left-0 lg:bottom-1 text-white text-sm">
          <a href="#">Av. Bolognesi 756, Chiclayo, Perú</a>
        </p>
        <p className="absolute bottom-0 lg:bottom-1 lg:right-0 text-[8px] lg:text-[10px] text-white text-center">
          "Los juegos de azar realizados constantemente pueden ser dañinos para
          la salud", Art. 51 de la ley 27153. "Jugar en exceso causa ludopatía"{" "}
        </p>
    </section>
  );
};

export default Hero;
