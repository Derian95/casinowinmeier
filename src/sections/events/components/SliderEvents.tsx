import { FC, useState } from "react";
import { useCasinoStore } from "../../../store/casinoStore";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { responsive } from "../../../utils";
import { NextArrow, PrevArrow } from "../../../common/components";

interface SliderEventsProps {}

export const SliderEvents: FC<SliderEventsProps> = ({}) => {
  const { dataCasino } = useCasinoStore();
  const [selectedItem, setSelectedItem] = useState(0);

  const handleSelect = (index:number) => {
    setSelectedItem(index);
  };
  return (
    <>
      {dataCasino ? (
        <div>
          {dataCasino.sections.events.events.length == 1 ? (
            <div
              key={dataCasino.sections.events.events[0].idAnnouncement}
              className="h-fit "
            >
              <img
                src={
                  dataCasino.sections.events.events[0]
                    .announcementsMedia[0].pathWeb
                }
                alt="promocion casino keops"
                className="w-72 h-72 sm:w-[500px] sm:h-[500px] lg:w-[420px] lg:h-[420px] xl:w-[440px] xl:h-[440px] m-auto rounded-xl"
              />
            </div>
          ) : (
            <Slider
              infinite={true}
              dots={true}
              autoplay
              pauseOnHover={true}
              responsive={responsive}
              nextArrow={<NextArrow color={"black"} coloBg={"white"} />}
              prevArrow={<PrevArrow color={"black"} coloBg={"white"} />}
              afterChange={handleSelect}
              customPaging={(i)=><p className={selectedItem === i ? "bg-[#fff] w-[6px] h-[6px] rounded-full mt-2" : "bg-[#7e7e7e] w-[6px] h-[6px] mt-2 rounded-full"} onClick={() => handleSelect(i)}></p>}
            >
              {dataCasino.sections.events.events.map((event) => (
                <div key={event.idAnnouncement} className="h-fit ">
                  <img
                    src={event.announcementsMedia[0].pathWeb}
                    alt="promocion casino keops"
                    className="w-72 h-72 sm:w-[500px] sm:h-[500px] lg:w-[420px] lg:h-[420px] xl:w-[440px] xl:h-[440px] m-auto rounded-xl"
                  />
                </div>
              ))}
            </Slider>
          )}
        </div>
      ) : null}
    </>
  );
};
