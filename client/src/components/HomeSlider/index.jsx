import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";
import "./styles.css";

const HomeSlider = () => {
  // List banners
  return (
    <>
      {/* Bọc list các slide */}
      <Swiper
        spaceBetween={10} //Khong gian giua cac slide
        loop={true} // lap lai slide
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }} // tu dong chuyen slide
        navigation={true} // hien thi nut next - prev
        modules={[Navigation, Autoplay]} // su dung modules
        className="mySwiper !py-4"
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
