import { FC } from "react";
import imagen from "../../assets/club/club.png";
import { LinksNavbar } from "../../sections/header/models";
import useHasScrolledButton from "../../hooks/useBtnScroll";

interface BtnClubProps {}

const BtnClub: FC<BtnClubProps> = ({}) => {
    const hasScrolled = useHasScrolledButton()
  return (
    <a
      href={`#${LinksNavbar.Register}`}
      className={`animation scale-50 md:scale-100 w-24 h-24 cursor-pointer bg-metal fixed bottom-[1px] right-[1px] md:bottom-[15px] md:right-[15px]  z-20 rotate-90 border border-[#313131] ${hasScrolled ? 'translate-x-0 opacity-100':'-translate-x-96 opacity-0'} `}
      style={{ borderRadius: "100%" }}
    >
      <div className="w-full h-full flex justify-center items-center  ">
        <div
          className="w-20 h-20  bg-metal flex-col   z-20 -rotate-90 border border-[#fff] flex justify-center items-center "
          style={{ borderRadius: "100%" }}
        >
          <img src={imagen} alt="" className="w-14 mb-2 max-w-fit" />
          <p className="text-[10px] -translate-y-2 font-semibold">Regístrate</p>
        </div>
      </div>
    </a>
  );
};

export default BtnClub;
