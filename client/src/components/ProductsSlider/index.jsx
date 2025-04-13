import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import ProductItem from "../ProductItem";

const ProductsSlider = (props) => {
  return (
    <section className="productsSlider py-3">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default ProductsSlider;
