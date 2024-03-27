import { FC } from "react";

interface ItemBenefitsProps {
  color:            string
  image:            string
  description:      string
}

export const ItemBenefits: FC<ItemBenefitsProps> = ({ color, image, description }) => {
  return (
    <div className="flex flex-col items-center lg:items-start gap-5 max-h-full ">
      <div
        style={{ backgroundColor: color }}
        className="bg-[#E6CA8C] w-fit p-3 rounded-lg"
      >
        <img src={image} alt="keops casino" className="w-7" />
      </div>
      <p className="max-w-xs text-center lg:text-start">
        {description}
      </p>
    </div>
  );
};
