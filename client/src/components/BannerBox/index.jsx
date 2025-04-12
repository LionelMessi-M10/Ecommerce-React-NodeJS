import React from "react";
import { Link } from "react-router-dom";

const BannerBox = (props) => {
  return (
    <div className="box bannerBox overflow-hidden rounded-lg group">
      <Link to={props.link} className="w-full h-full">
        <img src={props.img} alt="Banner" className="w-full group-hover:scale-105 group-hover:rotate-1 transition-all" />
      </Link>
    </div>
  );
};

export default BannerBox;
