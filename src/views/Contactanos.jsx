import React from 'react';
import '../styles/App.css'; 
import ContactForm from '../components/ContactForm.jsx';
import Mapa from '../components/Mapa.jsx';

const Contactanos = (props) =>  (
   
 <section id="featured" className="py-3 py-lg-5">
    <div className="container">
        <div className="row justify-content-center flex-row flex-wrap">
            <div className="col-md-10 text-center mb-3 mb-lg-5">
                <h3 className="green-color"><strong>{props.nombre}</strong></h3>
            </div>
            <div className="row justify-content-center mb-5">
               <div className="col-md-10">
                <ContactForm/>{}
                </div>
                <Mapa/>
            </div>
        </div>
    </div>
</section>
);

export default Contactanos
