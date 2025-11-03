import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

import '../styles/App.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(email, password);
    if (success) navigate('/dashboard');
  };

  return (
    <section className="mt-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6">
            <h3 className="green-color text-center"><strong>Bienvenido a Nexus</strong></h3>
            <p className="text-center">Ingresa con tu email y contraseña:</p>

            <form onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label>Email</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label>Contraseña</label>
              </div>

              <div className="text-center mb-3"><small>User: Jesús / Pass: hola</small></div>

              <button type="submit" className="btn btn-green w-100">Iniciar sesión</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;

