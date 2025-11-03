import React, { useState } from 'react';
import '../styles/App.css';

const CamposIterables = () => (
  <>
    <div className="mb-3">
      <label htmlFor="orderNumber" className="form-label">Número de Pedido</label>
      <input type="text" className="form-control" id="orderNumber" required />
    </div>
    <div className="mb-3">
      <label htmlFor="issueType" className="form-label">Tipo de reclamo</label>
      <select className="form-select" id="issueType" required>
        <option value="">Selecciona el tipo de reclamo</option>
        <option value="damaged">Producto Dañado</option>
        <option value="wrong">Producto Incorrecto</option>
        <option value="late">Tardanza en tiempo de entrega</option>
        <option value="return">Solicitud de devolución de dinero</option>
      </select>
    </div>
    <div className="input-group mb-3">
      <input type="file" className="form-control" id="inputGroupFile02" />
      <label className="input-group-text" htmlFor="inputGroupFile02">Adjuntar soporte</label>
    </div>
  </>
);

const ContactForm = () => {
  const [contactType, setContactType] = useState('');

  const OpcionSeleccionada = (event) => {
    setContactType(event.target.value);
  };

  return (
    <form>
      <p className="mb-5">Estamos para ayudarte. Completa el formulario y nos pondremos en contacto contigo a la brevedad.</p>
      <div className="row justify-content-center">
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre y apellido</label>
          <input type="text" className="form-control" id="nombre" />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo electrónico</label>
          <input type="email" className="form-control" id="email" placeholder="name@example.com" />
        </div>

        <div className="mb-3">
          <label htmlFor="helpType" className="form-label">¿Cómo te podemos ayudar?</label>
          <select
            className="form-select"
            id="helpType"
            value={contactType}
            onChange={OpcionSeleccionada}
          >
            <option value="">Elige una opción</option>
            <option value="1">Pregunta</option>
            <option value="2">Reclamos</option>
            <option value="3">Felicitación</option>
          </select>
        </div>

        {contactType === '2' && <CamposIterables />}

        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label">Describe tu situación</label>
          <textarea className="form-control" id="descripcion" rows="3"></textarea>
        </div>

        <button type="submit" className="btn btn-green px-5">Enviar</button>
      </div>
    </form>
  );
};

export default ContactForm;
