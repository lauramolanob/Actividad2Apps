import React from 'react';
import '../styles/App.css';
import Categorias from './Categorias.jsx';
import SuscripcionNews from './SuscripcionNews.jsx';
import Books from './Books.jsx';
import Carousel from './Carousel.jsx';

const Landing = () => (
    <>
      <Carousel />
      <Books nombre="Novedades" limit={4}/> 
      <Categorias nombre="categorías" /> 
      <SuscripcionNews />
    </>
  )


export default Landing
