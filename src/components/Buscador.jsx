import React from 'react';
import '../styles/App.css';

const Buscador = () => (
    <>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <div className="input-group w-100 mt-lg-0 mt-3 mb-3 mb-lg-0">
                <input type="text" className="form-control border-0" placeholder="Buscar por título, autor o género..."
                    aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <span className="input-group-text b-green border-0" id="basic-addon1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" className="bi bi-search"
                        viewBox="0 0 16 16">
                        <path
                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0">
                        </path>
                    </svg>
                </span>
            </div>
        </div>
    </>
)


export default Buscador
