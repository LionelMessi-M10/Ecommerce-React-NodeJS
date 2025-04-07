import React from "react";
import HomeSlider from "../../components/HomeSlider";
import HomeCatSlider from "../../components/HomeCatSlider";
import { FaShippingFast } from "react-icons/fa";
import AdsBannerSlider from "../../components/AdsBannerSlider";

const Home = () => {
  return (
    <>
      <HomeSlider />
      <HomeCatSlider />

      <section className="py-16 bg-white">
        <div className="container">
          <div className="freeShipping w-full md:w-[80%] m-auto py-4 p-4 border-2 border-[#ff5252] flex items-center justify-center lg:justify-between flex-col lg:flex-row rounded-md mb-7">
            <div className="col1 flex items-center gap-4">
              <FaShippingFast className="text-[50px]" />
              <span className="text-[16px] lg:text-[20px] font-[600] uppercase">Free Shipping</span>
            </div>

            <div className="col2">
              <p className="mb-0 mt-0 font-[500] text-center">
                Free Delivery Now On Your First Order and over $200
              </p>
            </div>

            <div className="col3">
              <p className="mb-0 font-bold text-[25px]">- Only $200*</p>
            </div>

          </div>

          <AdsBannerSlider items={4} />
        </div>
      </section>



      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </>
  );
};

export default Home;
