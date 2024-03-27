import { FC } from "react";
import { ClubList } from ".";
import { useCasinoStore } from "../../../../store/casinoStore";

interface ClubScProps {}

const ClubSc: FC<ClubScProps> = ({}) => {
    const { dataCasino } = useCasinoStore()
  return (
    <section className="grid place-items-center pb-40 px-2">
      <div className="children">
      <h2 className="normal-title max-w-md mb-16 text-center m-auto"
        >{dataCasino?.sections.clubBenefits.infoSection.title}
        </h2>
        <ClubList />
      </div>
    </section>
  );
};

export default ClubSc;
