import React from 'react';
import '../styles/App.css';
import Buscador from '../components/Buscador';
import ButtonCarrito from '../components/ButtonCarrito';
import ButtonLogin from '../components/ButtonLogin';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="navbar navbar-expand-lg header-library py-3">
    <div className="container">
      <Link className="navbar-brand m-0 p-0" to="/">
        <img src="/logo.svg" width="40%" alt="Logo" />
      </Link>

      <button
        className="navbar-toggler btn-green"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon text-white"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="d-flex align-items-center flex-grow-1">
          <Buscador />
          <div className="chart ms-4 d-flex justify-content-end flex-shrink-0">
            <ButtonCarrito />
            <ButtonLogin />
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Nav;
