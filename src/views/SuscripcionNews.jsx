import React from 'react';
import '../styles/App.css';
import FormSuscripcion  from '../components/FormSuscripcion.jsx';

const SuscripcionNews = () => (
    <>
    <section class="py-5" id="newsletter">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-12">
                        <h3 class="text-white text-center"><strong>Suscríbete a nuestro newsletter y recibe ofertas y
                                promociones exclusivas</strong></h3>
                        <div class="row d-flex justify-content-center mt-2 mt-lg-5">    
                            <FormSuscripcion />
                        </div>
                    </div>              
                </div> 
            </div>
        </section>
    </>     
  )

export default SuscripcionNews
