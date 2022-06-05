import React from 'react';
import { img1, img2, img3, img4, img5, img6 } from '../../assets/problem';
import arrowL from '../../assets/arrow-left.png';
import arrowR from '../../assets/arrow-right.png';
import './Problem.scss';

export const Problem = () => (
  <div className="problem">
    <div className="with-padding">
      <div className="problem__container">
        <div className="problem__container--title">
          All the problem you can consult and get answer
        </div>
        <div className="problem__container--buttons">
          <button>Scenario</button>
          <button>Consult methods</button>
        </div>

        <div className="problem__container--images">
          <div className="problem__container--images-left">
            <img src={arrowL} />
          </div>
          <div className="problem__container--images-center">
            <img src={img1} />
            <img src={img2} />
            <img src={img3} />
            <img src={img4} />
            <img src={img5} />
            <img src={img6} />
          </div>
          <div className="problem__container--images-right">
            <img src={arrowR} />
          </div>
        </div>
      </div>
    </div>
  </div>
);
