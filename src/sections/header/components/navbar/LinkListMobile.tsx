import { FC } from "react";
import { useNabvarStore } from "../../store";
import { routesPage } from "../../data";
import { LinkItem } from ".";

interface LinkListMobileProps {

}

export const LinkListMobile: FC<LinkListMobileProps> = () => {
  const { showMenu } = useNabvarStore();

  return (
    <div
      className={`  h-screen w-screen z-20 duration-75 flex-col ${
        showMenu ? "translate-x-0" : "translate-x-full" 
      } absolute right-0 top-0 pt-20 xl:translate-x-full backdrop-blur-sm bg-[#1a1a1a]/80`}
    >
      <ul className="flex flex-col justify-center items-center p-4  mt-4 font-medium ">
        {routesPage.map((route) => {
          return (
            <LinkItem key={route.name} link={route.link} name={route.name} />
          );
        })}
      </ul>
    </div>
  );
};
