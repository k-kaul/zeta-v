'use client'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from 'react';
import Slider from 'react-slick';
import Image from "next/image";

const LogoSlider = () => {
  const [settings] = useState({
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    rtl: false,
    arrows: false
  });

  const logos = [    
    'https://base.demo.nextjstemplates.com/images/brand/brand-light-03.svg',
    'https://base.demo.nextjstemplates.com/images/brand/brand-light-01.svg',
    'https://base.demo.nextjstemplates.com/images/brand/brand-light-02.svg',
    'https://base.demo.nextjstemplates.com/images/brand/brand-light-04.svg',
    'https://base.demo.nextjstemplates.com/images/brand/brand-light-05.svg',
    'https://base.demo.nextjstemplates.com/images/brand/brand-light-06.svg',
    'https://aceternity.com/cdn-cgi/image/width=256/https://assets.aceternity.com/companies/zomato.png',
    'https://split-xi.vercel.app/_next/static/media/notion.56757276.svg',
    'https://split-xi.vercel.app/_next/static/media/auth0.bff781b3.svg',
    'https://split-xi.vercel.app/_next/static/media/algolia.162142c5.svg',
    'https://cdn.mrkhub.com/instapage-landings-frontend/228/images/_modules/partners-slider/honey-light.svg',
  ];

  return (
    <div className="xl:max-w-7xl lg:max-w-5xl md:max-w-2xl max-w-2xl">
      <Slider {...settings}>
        {
            logos.map((logo, index) => (
            <div key={index}>
                <Image src={logo} alt='logo' width={100} height={50} className="grayscale-100 pt-5"/>
            </div>          
        ))
        }
      </Slider>
      
    </div>
  );
  
};

export default LogoSlider;