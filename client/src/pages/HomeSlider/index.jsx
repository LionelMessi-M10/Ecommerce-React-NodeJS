import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const HomeSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper container !py-4"
      >
        <SwiperSlide>
          <div className="item rounded-[20px] overflow-hidden w-full">
            <img
              src="https://serviceapi.spicezgold.com/download/1741660862304_NewProject(8).jpg"
              alt="Slide 1"
              className="w-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item rounded-[20px] overflow-hidden w-full">
            <img
              src="https://serviceapi.spicezgold.com/download/1741660907985_NewProject.jpg"
              alt="Slide 2"
							className="w-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item rounded-[20px] overflow-hidden w-full">
            <img
              src="https://serviceapi.spicezgold.com/download/1741660777364_NewProject(12).jpg"
              alt="Slide 3"
							className="w-full"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeSlider;
