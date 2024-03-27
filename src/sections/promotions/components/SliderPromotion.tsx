import { FC } from 'react';
import { useCasinoStore } from '../../../store/casinoStore';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick';
import { responsive } from '../../../utils';
import { NextArrow, PrevArrow } from '../../../common/components';

interface SliderPromotionProps {
  
}

export const SliderPromotion: FC<SliderPromotionProps> = ({}) => {
  const { dataCasino } = useCasinoStore()

  return (
    <>
   
    {dataCasino?(
            <div >
              {
                dataCasino.sections.promotions.promotions.length==1 ?
                (
                  <div key={dataCasino.sections.promotions.promotions[0].idAnnouncement} className='h-fit '>
                  <img 
                  src={dataCasino.sections.promotions.promotions[0].announcementsMedia[0].pathWeb} 
                  alt="promocion casino keops" 
                  className='w-72 h-72 sm:w-[500px] sm:h-[500px] lg:w-[420px] lg:h-[420px] xl:w-[440px] xl:h-[440px] m-auto rounded-xl' />
                </div>
                ):
                (
                  <Slider
              infinite={true}
              dots={true}
							pauseOnHover={true}
              autoplay
              responsive={responsive}
              nextArrow={<NextArrow color={'white'} coloBg={'black'} />}
              prevArrow={<PrevArrow color={'white'} coloBg={'black'} />}
              >
                {
                  dataCasino.sections.promotions.promotions.map((promotion)=>(
                    <div key={promotion.idAnnouncement} className='h-fit '>
                      <img 
                      src={promotion.announcementsMedia[0].pathWeb} 
                      alt="promocion casino keops" 
                      className='w-72 h-72 sm:w-[500px] sm:h-[500px] lg:w-[420px] lg:h-[420px] xl:w-[440px] xl:h-[440px] m-auto rounded-xl' />
                    </div>
                  ))
                }
              </Slider>
                )
              }
            </div>
          ):null}
    </>
  );
};
