import React from 'react';
import '../styles/App.css';
import { useState } from 'react';

const ValidateEmail = () => {
    const [email, setEmail] = useState(''); // Estado para el email
    const [isValid, setIsValid] = useState(true); // Estado para validación
    const [isTouched, setIsTouched] = useState(false); // Estado para saber si el usuario interactuó

    // Función para validar email
    const validateEmailFormat = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Manejar cambio en el input
    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        
        // Validar solo si el usuario ya interactuó con el campo
        if (isTouched) {
            setIsValid(value !== '' && validateEmailFormat(value));
        }
    };

    // Manejar cuando el input pierde el foco
    const handleBlur = () => {
        setIsTouched(true);
        setIsValid(email !== '' && validateEmailFormat(email));
    };

    // Manejar envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsTouched(true);
        
        if (email === '' || !validateEmailFormat(email)) {
            setIsValid(false);
            console.log('Email inválido o vacío');
            return;
        }
        
        console.log('Email válido:', email);
        // Aquí puedes hacer lo que necesites con el email válido
    };

    return (
        <div className="col-12 col-lg-8">
            <div className="input-group mb-3">
                <div className="form-floating">
                    <input 
                        type="email" 
                        className={`form-control ${!isValid && isTouched ? 'border border-danger' : ''}`}
                        id="floatingInputGroup1" 
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                        onBlur={handleBlur}
                    />
                    <label htmlFor="floatingInputGroup1" className="opacity-75">
                        Escribe tu email
                    </label>
                </div>

                <span className="input-group-text px-3 b-green border-0" id="basic-addon1">
                    <a href="#" onClick={handleSubmit}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#fff"
                            className="bi bi-send-fill" viewBox="0 0 16 16">
                            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"></path>
                        </svg>
                    </a>
                </span>
            </div>
            
            {/* Mensaje de error */}
            {!isValid && isTouched && (
                <div className="text-danger small mt-1">
                    {email === '' ? 'El email no puede estar vacío' : 'Por favor ingresa un email válido'}
                </div>
            )}
        </div>
    );
};

export default ValidateEmail;