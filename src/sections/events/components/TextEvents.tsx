import { FC } from "react";
import { useCasinoStore } from "../../../store/casinoStore";

interface TextEventsProps {}

export const TextEvents: FC<TextEventsProps> = ({}) => {

  const { dataCasino } = useCasinoStore()

  return (
    <div className="relative">
      <h2 className="text-center variant-title mb-5">{dataCasino?.sections.events.infoSection.title}</h2>
      <p className="text-center variant-text">
        {dataCasino?.sections.events.infoSection.description}
      </p>
    </div>
  );
};
