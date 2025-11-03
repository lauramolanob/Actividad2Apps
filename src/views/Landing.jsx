import React from 'react';
import '../styles/App.css';
import Categorias from './Categorias.jsx';
import SuscripcionNews from './SuscripcionNews.jsx';

const Landing = () => (
    <>
      <Categorias nombre="categorías" /> 
      <SuscripcionNews />
    </>
  )


export default Landing
