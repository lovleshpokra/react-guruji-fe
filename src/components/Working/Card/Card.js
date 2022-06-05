import React from 'react';
import './Card.scss';

export const Card = ({ title, image, description }) => (
  <div className="working-card">
    <div className="working-card__image">
      <img src={image} />
    </div>
    <div className="working-card__content">
      <div className="working-card__content--title">{title}</div>
      <div className="working-card__content--description">{description}</div>
    </div>
  </div>
);
