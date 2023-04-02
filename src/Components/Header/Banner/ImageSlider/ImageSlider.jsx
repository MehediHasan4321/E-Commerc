import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import "slick-carousel/slick/slick-theme.css";
import images from './images'


const ImageSlider = () => {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed:900,
        lazyLoad: true,
        autoplay: true,
      autoplaySpeed: 5000,
      
       
      };
    return (
        <Slider {...settings}>
            {
                images.map(img=><div key={img.id}>
                    <img className='w-fulll h-[40vh] container mx-auto' src={img.src} alt="" />
                </div>)
            }
        </Slider>
    );
};

export default ImageSlider;