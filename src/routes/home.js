import React from 'react';
import Navbar from '../Componentes/navbar';
import HeroImage from '../Componentes/HeroImage';
import Work from "../Componentes/Work"
import Footer from '../Componentes/footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImage/>
      <Work/>
      <Footer/>
    </div>
  );
}

export default Home;