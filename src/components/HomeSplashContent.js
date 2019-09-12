import React, { Component } from "react";
import Slider from "react-slick";
import TitleBlock from "./TitleBlock";
import BlockOne from "./BlockOne";
import BlockTwo from "./BlockTwo";
import BlockThree from "./BlockThree";

class HomeSplashContent extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <TitleBlock />
        <BlockOne />
        <BlockTwo />
        <BlockThree />
      </Slider>
    );
  }
}

export default HomeSplashContent;
