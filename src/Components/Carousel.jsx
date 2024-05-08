import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Carousel(){
 var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility:false,
    arrows:false,
    cssEase: "linear"
  };

  return (
    <div className='w-[25vw]'>
        <Slider {...settings}>
              <div className='text-3xl font-semibold text-left'>
                <h3>Enhance fortune 50 company’s insights teams research capabilities</h3>
              </div>
              <div className='text-3xl font-semibold text-left'>
                <h3>Enhance fortune 50 company’s insights teams research capabilities</h3>
              </div>
              <div className='text-3xl font-semibold text-left'>
                <h3>Enhance fortune 50 company’s insights teams research capabilities</h3>
              </div>
            </Slider>
        </div>
    )
}
