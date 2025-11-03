import React from 'react'
import '../styles/App.css';

const NotFound = () => (
    <>
     <section id="featured" className="py-3 py-lg-5">
            <div className="container">
                <div className="row justify-content-center flex-row flex-wrap">
                    <div className="text-center mb-3 mb-lg-5">
                        <h3 className="green-color"><strong>Error 404: Página no encontrada</strong></h3>
                    </div>
                    <div className="col-md-10 text-left mb-3 mb-lg-5">
                        <p className="mb-5">«El problema no es que existan los enlaces rotos, sino que el destino
                        al que llevan es aburrido.» (Adaptado de J.R.R. Tolkien, probablemente).</p>
                        <p className="mb-5">Es probable que esta página haya viajado a otra dimensión o que 
                        hayas escrito mal el título. Mientras encontramos el camino de vuelta, no dejes que este
                        pequeño tropiezo detenga tu lectura.</p>
                    </div>
                </div>
            </div>
        </section>
     </>
);

export default NotFound
