import React from 'react';
import './Card.scss';

export const Card = ({ title, image, description }) => (
  <div className="reason-card">
    <div className="reason-card__image">
      <img src={image} />
    </div>
    <div className="reason-card__content">
      <div className="reason-card__content--title">{title}</div>
      <div className="reason-card__content--description">{description}</div>
    </div>
  </div>
);
