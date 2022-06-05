import React from 'react';
import { img1, img2, img3, img4 } from '../../assets/news';
import { Card } from './Card/Card';
import './InNews.scss';

export const InNews = () => (
  <div className="news">
    <div className="with-padding">
      <div className="news__container">
        <div className="news__container--title">Guruji in News</div>
        <div className="news__container--description">
          Our Sucess stories in Media Headlines and lots of Encouragement
        </div>
        <div className="news__container--cards">
          <Card title="Jan 7, 2021" image={img1} />
          <Card title="Jan 7, 2021" image={img2} />
          <Card title="Jan 7, 2021" image={img3} />
          <Card title="Jan 7, 2021" image={img4} />
          <Card title="Jan 7, 2021" image={img1} />
          <Card title="Jan 7, 2021" image={img2} />
          <Card title="Jan 7, 2021" image={img3} />
          <Card title="Jan 7, 2021" image={img4} />
          <Card title="Jan 7, 2021" image={img1} />
          <Card title="Jan 7, 2021" image={img2} />
          <Card title="Jan 7, 2021" image={img3} />
          <Card title="Jan 7, 2021" image={img4} />
        </div>
      </div>
    </div>
  </div>
);
