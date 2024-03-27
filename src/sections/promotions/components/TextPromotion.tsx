import { FC } from "react";
import { useCasinoStore } from "../../../store/casinoStore";

interface TextPromotionProps {}

export const TextPromotion: FC<TextPromotionProps> = ({}) => {

  const { dataCasino } = useCasinoStore()

  return (
    <>
      <h2 className="text-center normal-title mb-5">{dataCasino?.sections.promotions.infoSection.title}</h2>
      <p className="text-center normal-text">
        {dataCasino?.sections.promotions.infoSection.description}
      </p>
    </>
  );
};
