import { FC } from "react";
import { useCasinoStore } from "../../../../store/casinoStore";
import { Card } from ".";

interface ClubListProps {}

export const ClubList: FC<ClubListProps> = ({}) => {
  const { dataCasino } = useCasinoStore();

  return (
    <div className="grid grid-cols-1   sm:grid-cols-2 lg:grid-cols-5">
      {dataCasino?.sections.clubBenefits.clubBenefits
        .slice(0, 7)
        .map((benefit, index) => {
          return (
            <Card
              index={index + 1}
              key={benefit.idClubBenefit}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.iconPathWeb}
            />
          );
        })}

      <div className=" lg:row-start-1 lg:row-end-3 lg:col-start-2 lg:col-end-5 relative justify-center flex items-center">
        
        <img
          src={dataCasino?.sections.clubBenefits.infoSection.imagePathWeb}
          alt=""
          className="w-[80%]"
        />

      </div>
    </div>
  );
};
