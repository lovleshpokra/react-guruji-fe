import React from 'react';
import shield from '../../assets/satisfaction.png';
import swatn from '../../assets/swatn.png';
import { Card } from './Card/Card';
import './Satisfaction.scss';

export const Satisfaction = () => (
  <div className="satisfaction">
    <div className="with-padding">
      <div className="satisfaction__shield">
        <img src={shield} />
      </div>
      <div className="satisfaction__container">
        <div className="satisfaction__container--title">
          100% Satisfaction guarantee
        </div>
        <div className="satisfaction__container--subtitle">
          If you are not satisfied by your consultation. We promise you to
          refund and you can take another Guruji
        </div>
        <div className="satisfaction__container--cards">
          <Card
            name="Swatanwa Astro to"
            company="Exporu U"
            rating={4}
            date="August 25th 2021"
            image={swatn}
            tags={['Taort', 'Vedic', 'Ancient HinduAstrology']}
            description="Gave me a basic understanding of some key words sand phrases which I really like it！Gave me a basic understanding of some key words sand phrases which I really like it like it like it like it."
          />
          <Card
            name="Swatanwa Astro to"
            company="Exporu U"
            rating={4}
            date="August 25th 2021"
            image={swatn}
            tags={['Taort', 'Vedic', 'Ancient HinduAstrology']}
            description="Gave me a basic understanding of some key words sand phrases which I really like it！Gave me a basic understanding of some key words sand phrases which I really like it like it like it like it."
          />
          <Card
            name="Swatanwa Astro to"
            company="Exporu U"
            rating={4}
            date="August 25th 2021"
            image={swatn}
            tags={['Taort', 'Vedic', 'Ancient HinduAstrology']}
            description="Gave me a basic understanding of some key words sand phrases which I really like it！Gave me a basic understanding of some key words sand phrases which I really like it like it like it like it."
          />
          <Card
            name="Swatanwa Astro to"
            company="Exporu U"
            rating={4}
            date="August 25th 2021"
            image={swatn}
            tags={['Taort', 'Vedic', 'Ancient HinduAstrology']}
            description="Gave me a basic understanding of some key words sand phrases which I really like it！Gave me a basic understanding of some key words sand phrases which I really like it like it like it like it."
          />
        </div>
      </div>
    </div>
  </div>
);
