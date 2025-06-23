import React from 'react';
import { Hero } from './components/Hero';
import { WhoWeAre } from './components/WhoWeAre';
import { WhatWeStandFor } from './components/WhatWeStandFor';
import { HowWeWork } from './components/HowWeWork';
import { OurAlignment } from './components/OurAlignment';
import { Partnerships } from './components/Partnerships';
import { LegalStatement } from './components/LegalStatement';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhoWeAre />
      <WhatWeStandFor />
      <HowWeWork />
      <OurAlignment />
      <Partnerships />
      <LegalStatement />
      <Footer />
    </div>
  );
}

export default App;