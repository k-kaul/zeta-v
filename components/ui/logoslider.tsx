'use client'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from 'react';
import Slider from 'react-slick';
import Image from "next/image";
// import logo from '@/assets/logo.png';


const LogoSlider = () => {
  const [settings] = useState({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: 'linear',
  });

  const logos = [
    'https://brandlogos.net/wp-content/uploads/2025/08/deportivo_pasto-logo_brandlogos.net_uwdn1-768x749.png',
    'https://brandlogos.net/wp-content/uploads/2025/08/deportivo_pasto-logo_brandlogos.net_uwdn1-768x749.png',
    'https://brandlogos.net/wp-content/uploads/2025/08/deportivo_pasto-logo_brandlogos.net_uwdn1-768x749.png',
    'https://brandlogos.net/wp-content/uploads/2025/08/deportivo_pasto-logo_brandlogos.net_uwdn1-768x749.png',
    'https://brandlogos.net/wp-content/uploads/2025/08/deportivo_pasto-logo_brandlogos.net_uwdn1-768x749.png',
    'https://zeta-v.com/wp-content/uploads/2025/01/swan-solutionslogonew1.avif'

  ];

  return (
    <div>
      <h2>Proudly Supported by</h2>
      <Slider {...settings}>
        {
            logos.map((logo, index) => (
          <div key={index} className="container">
            <Image src={logo} alt='logo' width={40} height={40}/>
          </div>
        ))
        }
      </Slider>
    </div>
  );
};

export default LogoSlider;