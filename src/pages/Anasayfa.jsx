import React from "react";
import Home from "../components/Home/home";
import HomeText from "../components/HomeText/homeText";
import {EmblaCarousel} from "../components/Carousel/EmblaCarousel";



const Anasayfa = () => {
  return (
    <div>

      <Home />
      <HomeText />
      <EmblaCarousel/>
      
    </div>
  );
};

export default Anasayfa;
