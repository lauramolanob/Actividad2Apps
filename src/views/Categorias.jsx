import React, { useEffect, useState } from 'react';
import '../styles/Categorias.css';
import '../styles/App.css';
import CategoriaCard from '../components/CategoriaCard';

const Categorias = (props) =>  {
    
    const [categoriasData, setCategoriasData] = useState([]);

    useEffect(() => {
    fetch('/data/categorias.json')
      .then((res) => res.json())
      .then((data) => setCategoriasData(data))
    }, []);

    return (

    <section id="featured" className="py-3 pt-lg-1 pb-lg-5">
        <div className="container">
            <div className="row justify-content-center flex-row flex-wrap">
                <div className="d-flex flex-row justify-content-between align-items-center mb-3 mb-lg-5">
                    <h3 className="green-color"><strong>Explora nuestras {props.nombre}</strong></h3>
                </div>

                <div className="row justify-content-center">
                    {categoriasData.map((categoria)=> (
                        <CategoriaCard 
                            key={categoria.id}
                            nombre={categoria.nombre}
                            imagen={categoria.imagen}
                            url={categoria.url}
                        />
                    ))}
                </div>
            </div>
        </div>
    </section>
    );
};

export default Categorias
