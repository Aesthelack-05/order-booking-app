// import React from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "../assets/slider1.png";
import Image1 from "../assets/slider2.png";
import Image2 from "../assets/slider3.png";

const ImageList = [
  { id: 1, img: Image },
  { id: 2, img: Image1 },
  { id: 3, img: Image2 },
];

// Custom arrow components
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="group absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white p-2 rounded-full shadow  hover:bg-green-500"
    >
      <svg className="w-5 h-5 group-hover:text-white text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="group absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white p-2 rounded-full shadow  hover:bg-green-500"
    >
      <svg className="w-5 h-5  group-hover:text-white text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </div>
  );
};

const Hero = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-full py-10">
      <div className="max-w-6xl mx-auto px-4 rounded-md relative">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id} className="flex justify-center">
              <img
                src={data.img}
                alt={`Slide ${data.id}`}
                className="w-full h-full object-cover mx-auto rounded-md"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
