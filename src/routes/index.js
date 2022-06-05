import React from 'react';
import { useRoutes } from 'react-router-dom';
import { About, Home } from '../pages';
import './common-style.scss';

export const Routes = () =>
  useRoutes([
    { path: '/', element: <Home /> },
    { path: 'about', element: <About /> },
  ]);
