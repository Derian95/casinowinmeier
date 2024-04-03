import { FC } from "react";
import { Title } from ".";
import { useCasinoStore } from "../../store/casinoStore";
import { LinksNavbar } from "../header/models";
import { Button } from "../../common/components";
// import imageBg from "../../assets/hero/bg3.webp";
import imageBackgroundDesktop from '../../assets/hero/banner_desktop.webp'
import imageBackgroundMobile from "../../assets/hero/banner_mobile.webp";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  const { dataCasino } = useCasinoStore();
  return (
    <section className="relative h-fit max-h-[100vh] bg-[#1a1a1a]" id={`${LinksNavbar.Home}`}>
      <img
        src={imageBackgroundDesktop}
        alt=""
        className="w-full  top-0 z-0 max-h-[100vh]  object-cover hidden md:block object-left-top aspect-video "
      />
      <img src={imageBackgroundMobile} alt="" className="object-top w-full  z-0  block md:hidden aspect-auto object-cover" />
      <div className="relative md:absolute md:top-0 py-10 md:py-0  w-full h-full grid place-items-center bg-white md:bg-transparent">
        <div className="max-w-screen-2xl h-full w-full ">
          <div className="flex w-full h-full flex-row-reverse">
            <div className="w-full md:w-2/4 flex flex-col items-center justify-center gap-10 ">
              <Title message={dataCasino?.sections.home.title!} />
              <Button
                type={"link"}
                href={`#${LinksNavbar.Register}`}
                name="Regístrate aquí y gana"
              />
            </div>
          </div>
        </div>
        <p className="absolute bottom-0 right-0 text-white text-sm">
          <a href="#" >
          Av. Bolognesi 756, Chiclayo, Perú
          </a>
        </p>
      </div>
    </section>
  );
};

export default Hero;

// <section className='flex flex-col gap-10 pt-20 md:pt-0 justify-center items-center  text-[#424241] px-5'>

//     <article className='w-full md:h-[700px] z-10 max-w-screen-xl flex flex-col justify-center items-center md:items-start gap-5'>
//       <Title message={dataCasino?.sections.home.title!}/>
//         <p className='w-2/4 '>{dataCasino?.sections.home.description}</p>
//         <button className='bg-orange-400 w-fit text-white px-10 py-4'>Regístrate</button>
//     </article>

//     <article className='bg-orange-500 w-full md:absolute md:right-0 md:top-0 h-[700px] md:w-7/12'>
//         <img src={dataCasino?.sections.home.imagePathWeb} alt="" height={100} className='h-full w-full object-contain'/>
//     </article>
// </section>
