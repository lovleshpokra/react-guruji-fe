import React from 'react';
import './Card.scss';

export const Card = ({ title, image }) => (
  <div className="news-card">
    <div className="news-card__image">
      <img src={image} />
    </div>
    <div className="news-card__content">
      <div className="news-card__content--title">{title}</div>
    </div>
  </div>
);
