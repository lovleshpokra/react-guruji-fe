import React from 'react';
import './Card.scss';

export const Card = ({ title, image }) => (
  <div className="rights-card">
    <div className="rights-card__image">
      <img src={image} />
    </div>
    <div className="rights-card__content">
      <div className="rights-card__content--title">{title}</div>
    </div>
  </div>
);
