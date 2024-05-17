import { FC } from "react";
import { Title } from ".";
import { useCasinoStore } from "../../store/casinoStore";
import { LinksNavbar } from "../header/models";
import { Button } from "../../common/components";
// import imageBg from "../../assets/hero/bg3.webp";
import imgUrl from '../../assets/hero/newBgWM.svg'
// import video from '../../assets/hero/Secuencia 01_1.webm'
interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  const { dataCasino } = useCasinoStore();
  return (
    <section style={{backgroundImage:`url("${imgUrl}")`, backgroundSize:'cover',backgroundRepeat:'no-repeat'}} className=" bg-[#2E2E2E] relative h-screen min-h-[900px] max-h-[100vh] grid place-items-center" id={`${LinksNavbar.Home}`} >
      {/* <img
        src={imageBackgroundDesktop}
        alt=""
        className="w-full  top-0 z-0 max-h-[100vh]  object-cover hidden md:block object-left-top aspect-video "
      /> */}
      {/* <img src={imageBackgroundMobile} alt="" className="object-top w-full  z-0  block md:hidden aspect-auto object-cover" /> */}

      <div className="relative  md:top-0 md:py-0  w-full h-full grid place-items-center bg-white md:bg-transparent max-w-screen-2xl">
      <div className=" h-full w-full ">
          <div className="flex w-full h-full flex-col xl:flex-row bg-[#2E2E2E]  xl:bg-transparent gap-10 px-5">
            <div className="w-full xl:w-2/4 flex flex-col xl:items-start items-center justify-center gap-10 pt-28 xl:pt-0">
              <Title message={""}  />
              <p className="text-white text-sm">*Válido solo para nuevos socios de WM Club.</p>
              {/* <div className="w-52 h-10 bg-gradient-to-b from-[#EE7A00] to-[#FFBD77] rounded-full"></div> */}
              <Button
                type={"link"}
                href={`#${LinksNavbar.Register}`}
                name="Regístrate aquí y gana"
              />
            </div>
            <div className="w-full xl:w-2/4  grid place-items-center animation-hero pb-10">
              {/* <img
                src={dataCasino?.sections.home.imagePathWeb}
                alt=""
                className="w-full h-full object-contain sm:w-8/12 md:w-7/12 lg:w-5/12  xl:w-11/12 "
              /> */}
              {/* <video src={video} className="rounded-2xl" autoPlay muted loop></video> */}
              <video autoPlay muted loop className="rounded-xl">
                 <source  src={dataCasino?.generalData.promotionalVideoPathWeb} type="video/webm"/>
                 <source src={dataCasino?.generalData.promotionalVideoPathWeb} type='video/mp4; codecs="hvc1"' />
              </video>
             
              {/* <video width="600" height="100%" autoPlay loop muted playsInline>
                <source 
                  src="https://rotato.netlify.app/alpha-demo/movie-webm.webm" 
                  type="video/webm"/>
              </video> */}
            </div>
          </div>
        </div>
        <p className="absolute bottom-0 right-0 text-white text-sm">
          <a href="#" >
          Av. Bolognesi 756, Chiclayo, Perú
          </a>
        </p>
        <p className="absolute bottom-3 lg:bottom-0 left-0 text-[9px] lg:text-[10px] text-white lowe">"Los juegos de azar realizados constantemente pueden ser dañinos para la salud", Art. 51 de la ley 27153. "Jugar en exceso causa ludopatía" </p>
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
