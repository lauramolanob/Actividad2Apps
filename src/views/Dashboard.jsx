import React from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import Beneficios from '../components/Beneficios.jsx';
import '../styles/App.css';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <section className="mt-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <h3 className="green-color text-center"><strong>¡Hola {user?.email}!</strong></h3>
            <p className="text-center">Estamos encantados de tenerte de vuelta. Desde aquí, podrás gestionar tu lista
              de deseos, revisar tu historial de pedidos, y recibir recomendaciones
              personalizadas que resuenan con tus intereses únicos.  ¡Descubre tu próxima gran
              aventura!</p>
            <div className="text-center mb-3">
            <button className="btn btn-green" onClick={logout}>Cerrar sesión</button>
            </div>
          </div>
        </div>
      </div>
      <Beneficios />
    </section>
    
  );
};


export default Dashboard;
