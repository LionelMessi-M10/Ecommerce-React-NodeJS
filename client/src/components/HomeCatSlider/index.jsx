import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HomeCatSlider = () => {
  return (
    <div className="homeCatSlider pt-4 py-8">
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
                  className="w-[60px] transition-all duration-300 hover:scale-110"
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
                  className="w-[60px] transition-all duration-300 hover:scale-110"
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
                  className="w-[60px] transition-all duration-300 hover:scale-110"
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
                  className="w-[60px] transition-all duration-300 hover:scale-110"
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
                  className="w-[60px] transition-all duration-300 hover:scale-110"
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
                  className="w-[60px] transition-all duration-300 hover:scale-110"
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
                  className="w-[60px] transition-all duration-300 hover:scale-110"
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
                  className="w-[60px] transition-all duration-300 hover:scale-110"
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
                  className="w-[60px] transition-all duration-300 hover:scale-110"
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
                  className="w-[60px] transition-all duration-300 hover:scale-110"
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
                  className="w-[60px] transition-all duration-300 hover:scale-110"
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
