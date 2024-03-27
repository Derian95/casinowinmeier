import { FC } from "react";
import { useNabvarStore } from "../../store";

interface ButtonMenuProps {
}

export const ButtonMenu: FC<ButtonMenuProps> = () => {
  const { setShowMenu,showMenu } = useNabvarStore();

  return (
    <button
      aria-label="Abrir menú de navegación"
      onClick={setShowMenu}
      data-collapse-toggle="navbar-sticky"
      type="button"
      className="inline-flex items-center p-2 w-11  h-11 justify-center  lg:hidden  z-30  "
      aria-controls="navbar-sticky"
      aria-expanded="false"
    >
      {showMenu ? (
<svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke={'white'}
        className="w-11 h-11"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
      ):(
        <svg
        width="101px"
        height="101px"
        className="h-auto"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#000000"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M4 18L20 18"
            stroke={"white"}
            strokeWidth="2"
            strokeLinecap="round"
          ></path>{" "}
          <path
            d="M4 12L20 12"
            stroke={ "white"}
            strokeWidth="2"
            strokeLinecap="round"
          ></path>{" "}
          <path
            d="M4 6L20 6"
            stroke={"white"}
            strokeWidth="2"
            strokeLinecap="round"
          ></path>{" "}
        </g>
      </svg>
      )}

      
    </button>
  );
};
