import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";
import "./styles.css";

const HomeSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={10}
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
      </Swiper>
    </>
  );
};

export default HomeSlider;
