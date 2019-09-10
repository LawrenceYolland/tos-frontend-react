import React, { Component } from "react";
import Slider from "react-slick";
import TitleBlock from "./TitleBlock";

class HomeSplashContent extends Component {
  render() {
    var settings = {
      //   dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <TitleBlock />

        <div className="hpc-h1-container">
          <h1 className="hpc-h1">heres some 2nd page content</h1>
        </div>
        <div className="hpc-h1-container">
          <h1 className="hpc-h1">
            <span className="hpc-span">heres some 2nd page content</span>
          </h1>
        </div>
        <div className="hpc-h1-container">
          <h1 className="hpc-h1">
            <span className="hpc-span">heres some 3rd page content</span>
          </h1>
        </div>
      </Slider>
    );
  }
}

export default HomeSplashContent;
