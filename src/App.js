import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes';
import { Footer, Header } from './components';

const App = () => (
  <>
    <Header />
    <Router>
      <Routes />
    </Router>
    <Footer />
  </>
);

export default App;
