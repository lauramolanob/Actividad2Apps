import React from 'react';
import '../styles/App.css';

const Beneficios = () => (

<>
    <section id="featured" className="py-3 py-lg-5 mt-5">
            <div className="container">
                <div className="row">
                    <div className="d-flex flex-row justify-content-between align-items-center mb-3 mb-lg-5">
                        <h3 className="green-color"><strong>Beneficios de comprar con Nexus<sup>®</sup> </strong></h3>
                    </div>
                    <div className="col-lg-3 col-6">
                        <div
                            className="d-flex flex-column justify-content-center text-center align-items-center card-category py-3 px-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="#1c5052"
                                className="bi bi-credit-card" viewBox="0 0 16 16">
                                <path
                                    d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                                <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                            </svg>
                            <h5 className="bold mt-3 mt-lg-4 green-color">Múltiples medios de pago</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6">
                        <div
                            className="d-flex flex-column justify-content-center text-center align-items-center card-category py-3 px-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="#1c5052"
                                className="bi bi-arrow-repeat" viewBox="0 0 16 16">
                                <path
                                    d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9" />
                                <path fill-rule="evenodd"
                                    d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z" />
                            </svg>
                            <h5 className="bold mt-3 mt-lg-4 green-color">Garantía de devolución</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6">
                        <div
                            className="d-flex flex-column justify-content-center text-center align-items-center card-category py-3 px-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="#1c5052"
                                className="bi bi-shield-lock" viewBox="0 0 16 16">
                                <path
                                    d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56" />
                                <path
                                    d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415" />
                            </svg>
                            <h5 className="bold mt-3 mt-lg-4 green-color">Compra 100% segura</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6">
                        <div
                            className="d-flex flex-column justify-content-center text-center align-items-center card-category py-3 px-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="#1c5052"
                                className="bi bi-airplane" viewBox="0 0 16 16">
                                <path
                                    d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849m.894.448C7.111 2.02 7 2.569 7 3v4a.5.5 0 0 1-.276.447l-5.448 2.724a.5.5 0 0 0-.276.447v.792l5.418-.903a.5.5 0 0 1 .575.41l.5 3a.5.5 0 0 1-.14.437L6.708 15h2.586l-.647-.646a.5.5 0 0 1-.14-.436l.5-3a.5.5 0 0 1 .576-.411L15 11.41v-.792a.5.5 0 0 0-.276-.447L9.276 7.447A.5.5 0 0 1 9 7V3c0-.432-.11-.979-.322-1.401C8.458 1.159 8.213 1 8 1s-.458.158-.678.599" />
                            </svg>
                            <h5 className="bold mt-3 mt-lg-4 green-color">Envíos a nivel mundial</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
  );

export default Beneficios
