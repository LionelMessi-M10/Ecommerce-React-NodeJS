import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BannerBoxV2 from "../BannerBoxV2";

const AdsBannerSliderV2 = (props) => {
  return (
    <div className="py-5 w-full">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="smlBtn"
      >
        <SwiperSlide>
            <BannerBoxV2 info="left" image={'https://serviceapi.spicezgold.com/download/1741663408792_1737020756772_New_Project_1.png'} link="/" />
        </SwiperSlide>
        <SwiperSlide>
            <BannerBoxV2 info="left" image={'https://serviceapi.spicezgold.com/download/1741663408792_1737020756772_New_Project_1.png'} link="/" />
        </SwiperSlide>
        <SwiperSlide>
            <BannerBoxV2 info="left" image={'https://serviceapi.spicezgold.com/download/1741663408792_1737020756772_New_Project_1.png'} link="/" />
        </SwiperSlide>
        <SwiperSlide>
            <BannerBoxV2 info="left" image={'https://serviceapi.spicezgold.com/download/1741663408792_1737020756772_New_Project_1.png'} link="/" />
        </SwiperSlide>
        <SwiperSlide>
            <BannerBoxV2 info="left" image={'https://serviceapi.spicezgold.com/download/1741663408792_1737020756772_New_Project_1.png'} link="/" />
        </SwiperSlide>
        <SwiperSlide>
            <BannerBoxV2 info="left" image={'https://serviceapi.spicezgold.com/download/1741663408792_1737020756772_New_Project_1.png'} link="/" />
        </SwiperSlide>
        <SwiperSlide>
            <BannerBoxV2 info="left" image={'https://serviceapi.spicezgold.com/download/1741663408792_1737020756772_New_Project_1.png'} link="/" />
        </SwiperSlide>
        <SwiperSlide>
            <BannerBoxV2 info="left" image={'https://serviceapi.spicezgold.com/download/1741663408792_1737020756772_New_Project_1.png'} link="/" />
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default AdsBannerSliderV2;
