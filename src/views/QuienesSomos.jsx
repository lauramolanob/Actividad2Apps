import React from 'react';
import '../styles/App.css';

const QuienesSomos = (props) =>(
    <>
        <section id="featured" className="py-3 py-lg-5">
            <div className="container">
                <div className="row justify-content-center flex-row flex-wrap">
                    <div className="text-center mb-3 mb-lg-5">
                        <h3 className="green-color"><strong>{props.nombre}</strong></h3>
                    </div>
                    <div className="col-md-10 text-left mb-3 mb-lg-5">
                        <p className="mb-5">En Librería Nexus, nos dedicamos a ser el punto de unión y referencia para todos
                            los amantes de la literatura en España. Nuestro proyecto nació con la firme convicción de que un
                            libro es la puerta a un mundo de conocimiento y emoción, y nos esforzamos por ofrecer un catálogo
                            extenso y riguroso que abarca desde los clásicos ineludibles hasta las voces contemporáneas más
                            prometedoras. Buscamos ser un espacio de descubrimiento constante, donde cada lector pueda
                            encontrar el título que resuene con sus intereses, ya sea en ficción, ensayo, historia o poesía.</p>
                            <p className="mb-5">Nuestra filosofía se centra en la excelencia del servicio y la creación de una
                            comunidad lectora. El equipo de Nexus está compuesto por profesionales apasionados, listos para
                            asesorarle con conocimiento y entusiasmo. Más allá de la venta, entendemos nuestra librería como
                            un centro cultural: un lugar para el intercambio de ideas, la celebración de eventos y la
                            promoción de la lectura. Lo invitamos a cruzar nuestro umbral y a hacer de Librería Nexus su
                            cómplice en cada nueva aventura literaria.</p>
                    </div>
                </div>
            </div>
        </section>
        
     </>
);

export default QuienesSomos
