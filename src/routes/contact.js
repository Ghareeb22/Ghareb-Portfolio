import React from 'react';
import Navbar from '../Componentes/navbar';

import Footer from '../Componentes/footer';
import HeroImage2 from '../Componentes/HeroImage2';
import Form from '../Componentes/Form';

const contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage2 heading ="Contact" text = "Let's Chat"/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default contact;