import React from 'react'
import '../styles/App.css';
import { useState, useRef, useEffect } from 'react';


const FaqItem = ({ id, title, content }) => {
    const [showButton, setShowButton] = useState(false); //Estado para validar si se debe o no mostrar el botón "ver más".
    const [expanded, setExpanded] = useState(false); //Estado para validar si el texto está o no expanded.
    
    //Referencia al contenedor del texto:
    const contentRef = useRef(null);

    useEffect(() => {
        const checkHeight = () => {
            if(contentRef.current){
                const height = contentRef.current.scrollHeight; //Calcula la altura contentRef.
                setShowButton(height > 50); //Muestra el botón si la altura de contentRef es mayor a 200px.
            }
        };

        checkHeight();
        window.addEventListener('resize', checkHeight);

        return () => {
            window.removeEventListener('resize', checkHeight);
        }
    }, [content]);

    const toggleExpandir = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="col-lg-6 col-12 my-3">
            <div className="col-11 col-lg-11 faq-container">
                <h5 className="mt-3 green-color bold">{id} {title}</h5>
                <div ref={contentRef} className={`content ${expanded ? 'content-expanded' : 'content-collapsed'}`}>
                    <p>{content}</p>
                </div>

                {showButton && (
                    <button
                        className="ver-mas-btn mt-2"
                        onClick={toggleExpandir}>
                        {expanded ? 'Ver menos' : 'Ver más'}
                    </button>
                )}
            </div>
        </div>
    )
}


export default FaqItem;
