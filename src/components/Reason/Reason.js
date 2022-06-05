import React from 'react';
import { img1, img2, img3, img4 } from '../../assets/reason';
import { Card } from './Card/Card';
import './Reason.scss';

export const Reason = () => (
  <div className="reason">
    <div className="with-padding">
      <div className="reason__container">
        <div className="reason__container--title">
          4 Reason why you should choose Guruji
        </div>
        <div className="reason__container--cards">
          <Card
            title="800+ Outstanding astrologers"
            image={img1}
            description="100% Guarantee???"
          />
          <Card
            title="Get your answer anytime anywhere"
            image={img2}
            description="You dont need astrologer near you"
          />
          <Card
            title="Diversified services"
            image={img3}
            description="Tarot, Vedic, Vastu, Palmism, Face reading and anything you need"
          />
          <Card
            title="100% Guarantee???"
            image={img4}
            description="Tarot, Vedic, Vastu, Palmism, Face reading and anything you need"
          />
        </div>
      </div>
    </div>
  </div>
);
