import { useRef, useState } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const ProductZoom = () => {

  const [sliderIndex, setSliderIndex] = useState(0);
  const zoomSliderBig = useRef();
  const zoomSliderSmall = useRef();

  const goto = (index) => {
    setSliderIndex(index);
    zoomSliderSmall.current.swiper.slideTo(index);
    zoomSliderBig.current.swiper.slideTo(index);
  }

  return (
    <>
      <div className='flex gap-3'>
        <div className='slider w-[15%]'>
          <Swiper
            ref={zoomSliderSmall}
            direction='vertical'
            slidesPerView={5}
            spaceBetween={0}
            navigation={true}
            modules={[Navigation]}
            className='zoomProductSliderThumbs h-[500px] overflow-hidden'
          >
            <SwiperSlide>
              <div className={`item rounded-md overflow-hidden cursor-pointer group ${sliderIndex === 0 ? 'opacity-1' : 'opacity-30'}`} onClick={() => goto(0)}>
                <img src="https://serviceapi.spicezgold.com/download/1753722939207_5107b7b1-ba6d-473c-9195-8576a6a0a9611749366193848-Flying-Machine-Women-Wide-Leg-High-Rise-Light-Fade-Stretchab-3.jpg" alt="anh 1"
                className='w-full transition-all group-hover:scale-105' />
              </div>
            </SwiperSlide>
            
            <SwiperSlide>
              <div className={`item rounded-md overflow-hidden cursor-pointer group ${sliderIndex === 1 ? 'opacity-1' : 'opacity-30'}`} onClick={() => goto(1)}>
                <img src="https://serviceapi.spicezgold.com/download/1753722959679_8a58d99c-b76b-4485-bb49-ba39521f94f31749366193880-Flying-Machine-Women-Wide-Leg-High-Rise-Light-Fade-Stretchab-2.jpg" alt="anh 2"
                className="w-full transition-all group-hover:scale-105" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`item rounded-md overflow-hidden cursor-pointer group ${sliderIndex === 2 ? 'opacity-1' : 'opacity-30'}`} onClick={() => goto(2)}>
                <img src="https://serviceapi.spicezgold.com/download/1753722959679_8a58d99c-b76b-4485-bb49-ba39521f94f31749366193880-Flying-Machine-Women-Wide-Leg-High-Rise-Light-Fade-Stretchab-2.jpg" alt="anh 3"
                className="w-full transition-all group-hover:scale-105" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`item rounded-md overflow-hidden cursor-pointer group ${sliderIndex === 3 ? 'opacity-1' : 'opacity-30'}`} onClick={() => goto(3)}>
                <img src="https://serviceapi.spicezgold.com/download/1753722959679_8a58d99c-b76b-4485-bb49-ba39521f94f31749366193880-Flying-Machine-Women-Wide-Leg-High-Rise-Light-Fade-Stretchab-2.jpg" alt="anh 4"
                className="w-full transition-all group-hover:scale-105" />
              </div>
            </SwiperSlide>
            <SwiperSlide></SwiperSlide>
          </Swiper>
        </div>
        
        <div className='zoomContainer w-[85%] h-[500px] overflow-hidden'>
          <Swiper
            ref={zoomSliderBig}
            slidesPerView={1}
            spaceBetween={0}
            navigation={false}
          >
            <SwiperSlide>
              <InnerImageZoom
                src='https://serviceapi.spicezgold.com/download/1753722939206_125c18d6-592d-4082-84e5-49707ae9a4fd1749366193911-Flying-Machine-Women-Wide-Leg-High-Rise-Light-Fade-Stretchab-1.jpg'
                zoomType='hover'
                zoomScale={1}
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                src='https://serviceapi.spicezgold.com/download/1753722959679_8a58d99c-b76b-4485-bb49-ba39521f94f31749366193880-Flying-Machine-Women-Wide-Leg-High-Rise-Light-Fade-Stretchab-2.jpg'
                zoomType='hover'
                zoomScale={1}
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                src='https://serviceapi.spicezgold.com/download/1753722959679_8a58d99c-b76b-4485-bb49-ba39521f94f31749366193880-Flying-Machine-Women-Wide-Leg-High-Rise-Light-Fade-Stretchab-2.jpg'
                zoomType='hover'
                zoomScale={1}
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                src='https://serviceapi.spicezgold.com/download/1753722959679_8a58d99c-b76b-4485-bb49-ba39521f94f31749366193880-Flying-Machine-Women-Wide-Leg-High-Rise-Light-Fade-Stretchab-2.jpg'
                zoomType='hover'
                zoomScale={1}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};
export default ProductZoom;
