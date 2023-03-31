import React from "react";
import CountUp from "react-countup";
import { AiFillCar } from "react-icons/ai";
import { BiGroup } from "react-icons/bi";
import { GiShakingHands, GiTrophyCup } from "react-icons/gi";
import CounterBg from "../../assets/img/counterBg.jpg";

const Counter = () => {
  return (
    <div
      className="counter-area py-8 flex bg-fixed flex-col justify-center min-h-[370px]"
      style={{
        backgroundImage: `url(${CounterBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center justify-center mb-5 gap-2">
            <p className="text-[#DF0303] text-8xl">
              <BiGroup />
            </p>
            <h2 className="text-[#fff]  uppercase text-[60px] leading-[48px] ">
              <CountUp end={892} duration={5} />
              <br />
              <span className="text-xl text-[#aaa]">Happy Clients</span>
            </h2>
          </div>
          <div className="flex items-center justify-center mb-5 gap-2">
            <p className="text-[#DF0303] text-8xl">
              <AiFillCar />
            </p>
            <h2 className="text-[#fff]  uppercase text-[60px] leading-[48px] ">
              <CountUp end={1292} duration={6} />
              <br />
              <span className="text-xl text-[#aaa]">CAR Finder</span>
            </h2>
          </div>
          <div className="flex items-center justify-center mb-5 gap-2">
            <p className="text-[#DF0303] text-8xl">
              <GiTrophyCup />
            </p>
            <h2 className="text-[#fff]  uppercase text-[60px] leading-[48px] ">
              <CountUp end={88} duration={3} />
              <br />
              <span className="text-xl text-[#aaa]">AWARDS</span>
            </h2>
          </div>
          <div className="flex items-center justify-center mb-5 gap-2">
            <p className="text-[#DF0303] text-8xl">
              <GiShakingHands />
            </p>
            <h2 className="text-[#fff]  uppercase text-[60px] leading-[48px] ">
              <CountUp end={992} duration={4} />
              <br />
              <span className="text-xl text-[#aaa]">DEALER BRANCHES</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
