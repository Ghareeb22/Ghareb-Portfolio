import React from 'react'
import Navbar from '../Componentes/navbar';

import Footer from '../Componentes/footer';
import HeroImage2 from '../Componentes/HeroImage2';
import AboutContent from '../Componentes/AboutContent';
const about = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage2 heading="About" text="I'M A Front-End React Developer"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default about;