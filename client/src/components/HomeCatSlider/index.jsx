import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const HomeCatSlider = () => {
  return (
    <div className="homeCatSlider">
      <div className="container">
        <Swiper
          slidesPerView={8}
          spaceBetween={10}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to={"/"}>
              <div className="item bg-white rounded-sm py-7 px-3 flex items-center justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741660962379_fash.png"
                  alt="Fashion"
                  className="w-[60px]"
                />
                <h3 className="text-[15px] mt-3 font-[500]">Fashion</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/"}>
              <div className="item bg-white rounded-sm py-7 px-3 flex items-center justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741660962379_fash.png"
                  alt="Fashion"
                  className="w-[60px]"
                />
                <h3 className="text-[15px] mt-3 font-[500]">Fashion</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/"}>
              <div className="item bg-white rounded-sm py-7 px-3 flex items-center justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741660962379_fash.png"
                  alt="Fashion"
                  className="w-[60px]"
                />
                <h3 className="text-[15px] mt-3 font-[500]">Fashion</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/"}>
              <div className="item bg-white rounded-sm py-7 px-3 flex items-center justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741660962379_fash.png"
                  alt="Fashion"
                  className="w-[60px]"
                />
                <h3 className="text-[15px] mt-3 font-[500]">Fashion</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/"}>
              <div className="item bg-white rounded-sm py-7 px-3 flex items-center justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741660962379_fash.png"
                  alt="Fashion"
                  className="w-[60px]"
                />
                <h3 className="text-[15px] mt-3 font-[500]">Fashion</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/"}>
              <div className="item bg-white rounded-sm py-7 px-3 flex items-center justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741660962379_fash.png"
                  alt="Fashion"
                  className="w-[60px]"
                />
                <h3 className="text-[15px] mt-3 font-[500]">Fashion</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/"}>
              <div className="item bg-white rounded-sm py-7 px-3 flex items-center justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741660962379_fash.png"
                  alt="Fashion"
                  className="w-[60px]"
                />
                <h3 className="text-[15px] mt-3 font-[500]">Fashion</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/"}>
              <div className="item bg-white rounded-sm py-7 px-3 flex items-center justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741660962379_fash.png"
                  alt="Fashion"
                  className="w-[60px]"
                />
                <h3 className="text-[15px] mt-3 font-[500]">Fashion</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/"}>
              <div className="item bg-white rounded-sm py-7 px-3 flex items-center justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741660962379_fash.png"
                  alt="Fashion"
                  className="w-[60px]"
                />
                <h3 className="text-[15px] mt-3 font-[500]">Fashion</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/"}>
              <div className="item bg-white rounded-sm py-7 px-3 flex items-center justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741660962379_fash.png"
                  alt="Fashion"
                  className="w-[60px]"
                />
                <h3 className="text-[15px] mt-3 font-[500]">Fashion</h3>
              </div>
            </Link>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCatSlider;
