import React from 'react';
import { img1, img2, img3 } from '../../assets/rights';
import { Card } from './Card/Card';
import './Rights.scss';

export const Rights = () => (
  <div className="rights">
    <div className="with-padding">
      <div className="rights__container">
        <div className="rights__container--title">How it works </div>
        <div className="rights__container--cards">
          <Card title="Refund if unsatisfied" image={img1} />
          <Card title="24x7 Customer support" image={img2} />
          <Card title="100% quality guarantee" image={img3} />
        </div>
      </div>
    </div>
  </div>
);
