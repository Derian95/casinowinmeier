import { FC } from "react";
import { useCasinoStore } from "../../../../store/casinoStore";
import { ListBenefits } from ".";

interface ClubBenefitsProps {}

const ClubBenefits: FC<ClubBenefitsProps> = ({}) => {
  const { dataCasino } = useCasinoStore();
  return (
    <section className="section py-0">
      <div className="children flex flex-col lg:flex-row items-center  gap-20 lg:gap-20">
        <div className="w-full max-h-full lg:w-2/4 order-2 lg:order-1 flex justify-center mb-10">
          <img
            src={dataCasino?.sections.club.imagePathWeb}
            alt=""
            className="w-full object-cover h-[560px]  rounded-xl "
          />
        </div>
        <div className="w-full lg:w-2/4 flex flex-col justify-around lg:h-[500px]  order-1 lg:order-2 gap-10">
          <div className="flex flex-col items-center lg:items-start ">
            {/* <span
              style={{ color: dataCasino?.generalData.color }}
              className="uppercase "
            > */}
              {/* {dataCasino?.sections.club.name}
            </span> */}
            <h2 className="normal-title">{dataCasino?.sections.club.title}</h2>
          </div>
          <ListBenefits />
        </div>
      </div>
    </section>
  );
};

export default ClubBenefits;
