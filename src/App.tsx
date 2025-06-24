import React from 'react';
import { Hero } from './components/Hero';
import { WhoWeAre } from './components/WhoWeAre';
import { WhatWeStandFor } from './components/WhatWeStandFor';
import { HowWeWork } from './components/HowWeWork';
import { OurAlignment } from './components/OurAlignment';
import { Partnerships } from './components/Partnerships';
import { BeAVolunteer } from './components/BeAVolunteer';
import { CollaborateWithUs } from './components/CollaborateWithUs';
import { BeACatalyst } from './components/BeACatalyst';
import { LegalStatement } from './components/LegalStatement';
import { Footer } from './components/Footer';
import { SurveyPopup } from './components/SurveyPopup';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhoWeAre />
      <WhatWeStandFor />
      <HowWeWork />
      <OurAlignment />
      <Partnerships />
      <BeAVolunteer />
      <CollaborateWithUs />
      <BeACatalyst />
      <LegalStatement />
      <Footer />
      <SurveyPopup />
    </div>
  );
}

export default App;