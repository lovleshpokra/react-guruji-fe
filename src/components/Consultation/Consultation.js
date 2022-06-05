import React from 'react';
import astrocard from '../../assets/astrocard.png';
import arrowL from '../../assets/arrow-left.png';
import arrowR from '../../assets/arrow-right.png';
import './Consultation.scss';

export const Consultation = () => (
  <div className="consultation">
    <div className="with-padding">
      <div className="consultation__container">
        <div className="consultation__container--title">
          Start your first consultation ＠₹5/min
        </div>
        <div className="consultation__container--images">
          <div className="consultation__container--images-left">
            <img src={arrowL} />
          </div>
          <div className="consultation__container--images-center">
            <img src={astrocard} />
            <img src={astrocard} />
            <img src={astrocard} />
            <img src={astrocard} />
          </div>
          <div className="consultation__container--images-right">
            <img src={arrowR} />
          </div>
        </div>
      </div>
    </div>
  </div>
);
