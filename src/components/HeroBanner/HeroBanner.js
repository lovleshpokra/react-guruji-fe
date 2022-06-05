import React from 'react';
import banner from '../../assets/banner.png';
import './HeroBanner.scss';

export const HeroBanner = () => (
  <div className="hero-banner">
    <div className="with-padding">
      <a href="/about">
        <img src={banner} />
      </a>
    </div>
  </div>
);
