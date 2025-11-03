import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';  

const Menu = ({NombreMenu}) => {
  
  const rutas = {
    'Inicio': '/',
    'Tienda': '/tienda',
    'Quiénes somos': '/quienes-somos',
    'Preguntas frecuentes': '/faq',
    'Contáctanos': '/contacto'
  };

  return (
    <li className="nav-item">
      <Link className="nav-link green-color" to={rutas[NombreMenu]}>
        {NombreMenu}
      </Link>
    </li>
  );
};

export default Menu

