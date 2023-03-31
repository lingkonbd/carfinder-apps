import React from "react";
import Shops from "../../pages/Shops";
import Advertise from "../Advertise";
import Category from "./Category";
import Counter from "./Counter";
import Hero from "./Hero";
import WhyCarFinder from "./WhyCarFinder";

const Home = () => {
  return (
    <div>
      <Hero />
      <Category />
      <Advertise />
      <Shops />
      <Counter />
      <WhyCarFinder />
    </div>
  );
};

export default Home;
