import React from 'react';
import { img1, img2, img3 } from '../../assets/working';
import { Card } from './Card/Card';
import './Working.scss';

export const Working = () => (
  <div className="working">
    <div className="with-padding">
      <div className="working__container">
        <div className="working__container--title">How it works </div>
        <div className="working__container--cards">
          <Card
            title="Find your Guruji"
            image={img1}
            description="Browse astrologers and check their skills, specialties and reviews. To find your destinated Guruji."
          />
          <Card
            title="Recharge for Consultation"
            image={img2}
            description="After recharge, you can have the new user offer: ₹5/min and MAX 6 mins duration."
          />
          <Card
            title="Solve problem with astrologers"
            image={img3}
            description="Call and Ask astrologers your problems.  By providing your birth chart, astrologer can help you get the answer."
          />
        </div>
      </div>
    </div>
  </div>
);
