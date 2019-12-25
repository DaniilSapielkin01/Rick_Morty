import React from 'react';


import { Footer, Header } from './index';
import { MainContainer } from '../routes/main'

export function App() {
  return (
    <div className="wrapper">
      <Header />
      <MainContainer />
      <Footer />
    </div>
  );
}

