import React from "react";
import "../styles/App.css";

const Carrito = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className={`cart-sidebar ${isVisible ? "open" : ""}`}>
      <div className="px-3 py-4 b-green d-flex justify-content-between align-items-center flex-shrink-0">
        <h4 className="text-white m-0">Carrito de compras</h4>
        <button type="button" className="btn btn-close btn-close-white" onClick={onClose} aria-label="Cerrar"/>
      </div>

      <div className="p-3 overflow-y-auto flex-grow-1">
        <ul className="menu-dropdown border-bottom list-unstyled">
          <li className="submenu pb-3">
            <div className="detail-cart d-flex align-items-start">
              <img src="/1.webp" alt="" className="img-fluid me-3" style={{ width: "60px", height: "auto" }} />
              
              <div className="ms-3 flex-grow-1">
                <h4 className="green-color m-lg-0 mt-0"><strong>Cien años de soledad</strong></h4>
                <p className="mt-0 mb-0 text-secondary-emphasis"> Gabriel García Márquez</p>
                <small className="opacity-75 text-dark"> Edición conmemorativa - Real Academia Española</small>
                <div className="mt-3">
                  <h4 className="green-color m-lg-0 mt-3"><strong>$12,50</strong></h4>
                </div>
              </div>
              
              <button type="button" className="btn-close ms-auto" aria-label="Cerrar"/>
            </div>
          </li>
        </ul>
      </div>

      <div className="mt-auto px-3 py-4 b-green text-white flex-shrink-0">
        <div className="justify-content-between d-flex mb-1">
          <p className="mb-0">1 producto</p>
          <div className="text-end">
            <small className="d-block">Subtotal</small>
            <h4 className="m-0">$12,50</h4>
          </div>
        </div>

        <div className="border-top border-white border-opacity-50 pt-3">
          <button type="button" className="btn btn-light green-color w-100">Finalizar compra</button>
        </div>
      </div>
    </div>
  );
};

export default Carrito;

