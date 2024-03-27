import { FC } from "react";
import { ColorArrow } from "./PrevArrow";

interface NextArrowProps {
    onClick?: () => void;
    color:       ColorArrow
    coloBg:     ColorArrow
}

export const NextArrow: FC<NextArrowProps> = ({ coloBg, color, onClick}) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer  top-[50%] absolute -right-[3px] p-1 rounded-full`}
      style={{backgroundColor:coloBg}}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="-1.5 0 24 24"
        strokeWidth="3"
        stroke={color}
        className="w-3 h-3"
      >
        <path strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
    </div>
  );
};
