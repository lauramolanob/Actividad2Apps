import React from 'react';
import '../styles/App.css';

const FormSuscripcion = () => (
    <>
        <div className="col-12 col-lg-8">
            <div className="input-group mb-3">

                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInputGroup1" placeholder="Username" />
                    <label for="floatingInputGroup1" className="opacity-75">Escribe tu email</label>
                </div>

                <span className="input-group-text px-3 b-green border-0" id="basic-addon1">
                    <a href="" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#fff"
                            className="bi bi-send-fill" viewBox="0 0 16 16">
                            <path
                                d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z">
                            </path>
                        </svg>
                    </a>
                </span>

            </div>
        </div>
    </>
  )

export default FormSuscripcion 
