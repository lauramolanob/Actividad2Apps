import React, { useEffect, useRef, useState } from 'react';
import '../styles/App.css';

const Mapa = () => {
  const mapaReferencia = useRef(null);
  const [mapaCargado, setMapaCargado] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (!document.querySelector("#google-maps-script")) {
      const script = document.createElement("script");
      script.id = "google-maps-script";   
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCs9YnfcACA4ySSZdSxOuo-KbmZyh5-1Os`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        console.log("Cargando mapa");
        initMapa();
      };
      document.body.appendChild(script);
    } else {
      initMapa();
    }

    function initMapa() {
      if (!window.google || mapaCargado) return;

      console.log("Inicializando mapa...");

      const coordenadas = { lat: 43.462305, lng: -3.809975 };

      const mapInstance = new window.google.maps.Map(mapaReferencia.current, {
        center: coordenadas,
        zoom: 14,
        disableDefaultUI: true,
      });

      new window.google.maps.Marker({
        position: coordenadas,
        map: mapInstance,
        title: "Nuestra ubicación",
      });

      setMapaCargado(true);
    }
  }, [mapaCargado]);

  return (
    <>
      <div
        ref={mapaReferencia}
        style={{
          width: "100%",
          height: "400px",
          borderRadius: "16px",
          transition: "all 0.5s ease",
          filter: isZoomed ? "none" : "grayscale(0.3) brightness(1.1)",
        }}
        className={`${isZoomed ? "position-fixed top-0 start-0 w-100 h-100 z-3 shadow-lg" : "mb-4"}`}
        onMouseEnter={() => {
          if (!isZoomed) mapaReferencia.current.style.filter = "hue-rotate(70deg) brightness(1.1)";
        }}
        onMouseLeave={() => {
          if (!isZoomed) mapaReferencia.current.style.filter = "grayscale(0.3) brightness(1.1)";
        }}
        onClick={() => setIsZoomed(!isZoomed)}
        aria-label="Mapa de ubicación"
      />

      {isZoomed && (
        <div
          onClick={() => setIsZoomed(false)}
          className="position-fixed top-0 start-0 w-100 h-100 bg-black bg-opacity-50 z-2"
        />
      )}
    </>
  );
};

export default Mapa;
