import React, { useEffect, useState } from 'react';
import '../styles/Categorias.css';
import '../styles/App.css';
import BookItem from '../components/ItemBook';

const Books = (props, limit) => {

    const [booksData, setBooksData] = useState([]);

    useEffect(() => {
        fetch('https://mock.apidog.com/m1/968218-0-default/books')
            .then((res) => res.json())
            .then((data) => {
                const showBooks = props.limit ? data.slice(0, props.limit) : data;
                setBooksData(showBooks);
            })
    }, [props, limit]);

    return (
        <section id="featured" className="py-3 py-lg-4">
            <div className="container">
                <div className="row justify-content-center flex-row flex-wrap">
                    <div className="d-flex flex-row justify-content-between align-items-center mb-3 mb-lg-5">
                        <h3 className="green-color"><strong>Explora nuestras {props.nombre}</strong></h3>
                    </div>

                    <div className="row d-flex justify-content-center mt-0 mt-lg-2">
                        {booksData.map((bookList) => (
                            <BookItem
                                key={bookList.id}
                                titulo={bookList.titulo}
                                autor={bookList.autor}
                                imagen={bookList.imagen}
                                precio={bookList.precio}
                                url={bookList.url}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Books;
