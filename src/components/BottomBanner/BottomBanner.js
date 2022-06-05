import React from 'react';
import banner from '../../assets/banner-bottom.png';
import './BottomBanner.scss';

export const BottomBanner = () => (
  <div className="bottom-banner">
    <div className="with-padding">
      <a href="/about">
        <img src={banner} />
      </a>
    </div>
  </div>
);
