import { FC } from "react";

import { LinkItem } from ".";
import { routesPage } from "../../data";
import { FacebookIcon, InstagramIcon, TiktokIcon } from "../icons";
// import useScroll from "../../hooks/useScroll";
// import { Button } from "../../../../common/components";

interface LinkListProps {

}

export const LinkList: FC<LinkListProps> = () => {
  // const hasScrolled = useScroll()

  return (
    <div
      id="navbar-sticky"
      className={`hidden xl:block  items-center justify-between w-full  lg:w-auto`}
      aria-controls="navbar-sticky"
    >
      <ul className="flex    gap-2">
        {routesPage.map((route) => {
          return (
            <LinkItem key={route.name} link={route.link} name={route.name} />
          );
        })}
        <FacebookIcon isDark={true} />
				<InstagramIcon isDark={true} />
				<TiktokIcon isDark={true} />
        {/* <Button type={"button"} name={"Catálogo"} /> */}
      </ul>
    </div>
  );
};
