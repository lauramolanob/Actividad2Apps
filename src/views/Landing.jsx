import React from 'react';
import '../styles/App.css';
import Categorias from './Categorias.jsx';
import SuscripcionNews from './SuscripcionNews.jsx';
import Books from './Books.jsx';

const Landing = () => (
    <>
      <Books nombre="novedades" limit={4}/> 
      <Categorias nombre="categorías" /> 
      <SuscripcionNews />
    </>
  )


export default Landing
