'use client'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from 'react';
import Slider from 'react-slick';
import Image from "next/image";

const LogoSlider = ({ slidesToScroll, slidesToShow, speed }:{ 
    slidesToScroll:number;
    slidesToShow: number; 
    speed: number; 
}) => {
  const [settings] = useState({
    dots: false,
    infinite: true,
    slidesToShow,
    slidesToScroll,
    autoplay: true,
    speed,
    autoplaySpeed: 0.1,
    cssEase: 'linear',
  });

  const logos = [
    'https://base.demo.nextjstemplates.com/images/brand/brand-light-03.svg',
    'https://base.demo.nextjstemplates.com/images/brand/brand-light-01.svg',
    'https://base.demo.nextjstemplates.com/images/brand/brand-light-02.svg',
    'https://base.demo.nextjstemplates.com/images/brand/brand-light-04.svg',
    'https://base.demo.nextjstemplates.com/images/brand/brand-light-05.svg',
    'https://base.demo.nextjstemplates.com/images/brand/brand-light-06.svg',
    'https://base.demo.nextjstemplates.com/images/brand/brand-light-03.svg',
    'https://base.demo.nextjstemplates.com/images/brand/brand-light-01.svg',
    'https://base.demo.nextjstemplates.com/images/brand/brand-light-02.svg',
    'https://base.demo.nextjstemplates.com/images/brand/brand-light-04.svg',
    'https://base.demo.nextjstemplates.com/images/brand/brand-light-05.svg',
    'https://base.demo.nextjstemplates.com/images/brand/brand-light-06.svg',
    'https://aceternity.com/cdn-cgi/image/width=256/https://assets.aceternity.com/companies/zomato.png',
    'https://split-xi.vercel.app/_next/static/media/notion.56757276.svg',
    'https://split-xi.vercel.app/_next/static/media/auth0.bff781b3.svg',
    'https://split-xi.vercel.app/_next/static/media/algolia.162142c5.svg'

  ];

  return (
    <div className="">
      <Slider {...settings} className="w-screen">
        {
            logos.map((logo, index) => (
            <div key={index} className="">
                <Image src={logo} alt='logo' width={120} height={1} className="grayscale-100"/>
            </div>          
        ))
        }
      </Slider>
      
    </div>
  );
  
};

export default LogoSlider;