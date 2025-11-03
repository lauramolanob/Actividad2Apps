import React from 'react';
import '../styles/App.css'; 
import Menu from '../views/Menu';

const itemMenuPrincipal = [
    {id:1, NombreMenu: 'Inicio'},
    {id:2, NombreMenu: 'Tienda'},
    {id:3, NombreMenu: 'Quiénes somos'},
    {id:4, NombreMenu: 'Preguntas frecuentes'},
    {id:5, NombreMenu: 'Contáctanos'},
];

const ItemMenu = () => (
    <><div className="bg-white border-bottom py-1">
            <div className="container ">
                <div className="row d-flex justify-content-between">
                    <div className="col-12">
                        <ul className="nav flex-nowrap flex-lg-wrap justify-content-start justify-content-lg-center">
                            {itemMenuPrincipal.map((item) => (
                                <Menu
                                    key={item.id}
                                    NombreMenu={item.NombreMenu}
                                />
                            ))} 
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </>
  )

export default ItemMenu
