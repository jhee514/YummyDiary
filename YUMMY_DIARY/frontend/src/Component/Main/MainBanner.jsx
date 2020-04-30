// auto sliding 가능한 banner 컨텐츠
import React from "react";
import Slider from "react-slick";

const MainBanner = (props) => {
  const images = [
    { url: "/banner1.png" },
    { url: "/banner2.png" },
    { url: "/banner3.png" },
    { url: "/banner4.png" }
  ];
  const settings = {
    //dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows:false
  };
  return (
    <Slider {...settings} >
      {images.map((img, index) => (
        <div>
          <img src={img.url} key={index} alt={index} style={{width:"100%" ,margin :"auto", height:"100%"}}/>
        </div>
      ))}
    </Slider>
  );
};

export default MainBanner;
