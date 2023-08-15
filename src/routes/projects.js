import React from 'react';
import Navbar from '../Componentes/navbar';

import Footer from '../Componentes/footer';
import HeroImage2 from '../Componentes/HeroImage2';
import Work from '../Componentes/Work';
const project = () => {
  return (
    <div>
      <Navbar/>
      
      <HeroImage2 heading="Projects" text= "This is some of my recent works"/>
      <Work/>
      <Footer/>
    </div>
  );
}

export default project;