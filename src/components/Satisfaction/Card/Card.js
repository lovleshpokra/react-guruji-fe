import React from 'react';
import star from '../../../assets/star.png';
import './Card.scss';

const renderRatings = rate => {
  const ratings = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < rate; i++) {
    ratings.push(star);
  }
  return ratings;
};

export const Card = ({
  name,
  company,
  rating,
  date,
  image,
  tags,
  description,
}) => (
  <div className="satisfaction-card">
    <div className="satisfaction-card__image">
      <img src={image} />
    </div>
    <div className="satisfaction-card__content">
      <div className="satisfaction-card__content--top">
        <div className="satisfaction-card__content--name">{name}</div>
        <div className="satisfaction-card__content--company">{company}</div>
      </div>
      <div className="satisfaction-card__content--ratings">
        <div className="satisfaction-card__content--rating">
          {renderRatings(rating).map((r, i) => (
            <img key={i} src={r} />
          ))}
        </div>
        <div className="satisfaction-card__content--date">{date}</div>
      </div>
      <div className="satisfaction-card__content--description">
        {description}
      </div>
      <div className="satisfaction-card__content--tags">
        {tags.map(t => (
          <label key={t}>{t}</label>
        ))}
      </div>
    </div>
  </div>
);
