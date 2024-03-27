import { FC } from "react";

interface PrevArrowProps {
    onClick?: () => void;
    color:       ColorArrow
    coloBg:     ColorArrow
}
export type ColorArrow = 'white' | 'black';

export const PrevArrow: FC<PrevArrowProps> = ({ onClick, coloBg, color }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer bg-${coloBg} top-[50%] absolute -left-[3px] z-10 p-1 rounded-full`}
      style={{backgroundColor:coloBg}}

    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="2 0 24 24"
        strokeWidth="3"
        stroke={color}
        className="w-3 h-3"
      >
        <path strokeLinecap="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
      </svg>
    </div>
  );
};

