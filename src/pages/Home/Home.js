import React from 'react';
import {
  Astro,
  BottomBanner,
  Consultation,
  HeroBanner,
  InNews,
  Problem,
  Reason,
  Rights,
  Satisfaction,
  Working,
} from '../../components';

export const Home = () => (
  <>
    <HeroBanner />
    <Problem />
    <Astro />
    <Reason />
    <Satisfaction />
    <Working />
    <Consultation />
    <Rights />
    <InNews />
    <BottomBanner />
  </>
);
