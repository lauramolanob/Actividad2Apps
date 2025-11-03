import React from 'react'
import '../styles/App.css';  

const CategoriaCard = ({nombre, imagen, url}) => (
    <>
      <div className="col-lg-2 col-4 debug-card-size">
        <a href={url} className="text-decoration-none" >
            <div className="d-flex flex-column justify-content-center text-center align-items-center card-category py-3 b-green">
                <img src={imagen} className=" img-fluid" alt="..." width="30%"/>
                <h5 className="bold mt-3 text-white">{nombre}</h5>
            </div>
        </a>
        </div>
    </>
  )


export default CategoriaCard
