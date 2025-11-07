import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./views/Nav.jsx";
import ItemMenu from "./components/ItemMenu.jsx";
import FooterGeneral from "./views/FooterGeneral.jsx";
import Landing from "./views/Landing.jsx";
import Contactanos from "./views/Contactanos.jsx";
import QuienesSomos from "./views/QuienesSomos.jsx";
import Faq from "./views/Faq.jsx";
import Books from "./views/Books.jsx";
import NotFound from "./views/NotFound.jsx";
import LoginForm from "./views/Login.jsx";
import Dashboard from "./views/Dashboard.jsx";
import PrivateRoute from "./rutas/PrivateRoute.jsx";
import Carrito from "./components/Carrito.jsx";
import "./styles/App.css";

<<<<<<< HEAD
const App = () => (
  <>
    <Nav />
    <ItemMenu />
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/books" element={<Books />} />
      <Route path="/quienes-somos" element={<QuienesSomos nombre= "Quiénes somos" />} />
      <Route path="/faq" element={<Faq nombre= "Preguntas frecuentes"/>} />
      <Route path="/contacto" element={<Contactanos nombre ="Contáctanos" />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <FooterGeneral />
  </>
);
=======
const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => {setIsCartOpen(prev => !prev);}
  
  return (
    <>
      <Nav onToggleCart={toggleCart} />
      <ItemMenu />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/books" element={<Books/>} />
        <Route path="/quienes-somos" element={<QuienesSomos nombre= "Quiénes somos" />} />
        <Route path="/faq" element={<Faq nombre= "Preguntas frecuentes"/>} />
        <Route path="/contacto" element={<Contactanos nombre ="Contáctanos" />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FooterGeneral />

      <Carrito isVisible={isCartOpen} onClose={() => setIsCartOpen(false)} /> 
      {isCartOpen && (<div className="modal-backdrop fade show" style={{zIndex: 1040}} onClick={() => setIsCartOpen(false)}/>)}
    </>
  );
};
>>>>>>> 493bb2c09dbd4b6c7cf1ab9e936dbed053d7fb89

export default App;
