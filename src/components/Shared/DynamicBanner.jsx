import React from "react";
import { Link } from "react-router-dom";
// import banner1 from "../../assets/img/category-bg.jpg";
import banner1 from "../../assets/img/counterBg.jpg";
const DynamicBanner = ({ title }) => {
  return (
    <div
      className="py-[70px] dynamic-banner"
      style={{
        backgroundImage: `url(${banner1})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="text-center">
          <h1 className="py-[10px] leading-[26px]	 text-white text-[16px]">
            <Link to="/">Home</Link>
            <span>
              {" "}
              {">"} {title}
            </span>
          </h1>
          <p className=" text-white text-3xl font-bold">{title}</p>
        </div>
        {/* <div className="bg-white">
          <h3>Find Your Car</h3>
        </div> */}
      </div>
    </div>
  );
};

export default DynamicBanner;
