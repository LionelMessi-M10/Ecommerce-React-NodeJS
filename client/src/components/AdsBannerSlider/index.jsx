import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const AdsBannerSlider = (props) => {
  return (
    <div className="py-5 w-full">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={10}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="box">
                <img src="https://serviceapi.spicezgold.com/download/1741669012402_banner1.webp" alt="Banner 1" className="rounded-md" />
            </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default AdsBannerSlider;
