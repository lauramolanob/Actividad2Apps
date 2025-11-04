import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./views/Nav.jsx";
import ItemMenu from "./components/ItemMenu.jsx";
import FooterGeneral from "./views/FooterGeneral.jsx";
import Landing from "./views/Landing.jsx";
import Contactanos from "./views/Contactanos.jsx";
import QuienesSomos from "./views/QuienesSomos.jsx";
import Faq from "./views/Faq.jsx";
import NotFound from "./views/NotFound.jsx";
import LoginForm from "./views/Login.jsx";
import Dashboard from "./views/Dashboard.jsx";
import PrivateRoute from "./rutas/PrivateRoute.jsx";
import "./styles/App.css";

const App = () => (
  <>
    <Nav />
    <ItemMenu />
    <Routes>
      <Route path="/" element={<Landing />} />
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

export default App;
