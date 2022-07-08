import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Navigator from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";

import HomePage from "./pages/homePage/HomePage";
import AsistenciaPage from "./pages/asistenciaPage/AsistenciaPage";
import RegalosPage from "./pages/regalosPage/RegalosPage";
import ContactoPage from "./pages/contactoPage/ContactoPage";




function App() {
    return (
      <div className="app">

        <BrowserRouter>
            <Navigator />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="asistencia" element={<AsistenciaPage />} />
            <Route path="regalos" element={<RegalosPage />} />
            <Route path="contacto" element={<ContactoPage />} />
          </Routes>
        </BrowserRouter>

        <Footer/>

      </div>
  );
}

export default App;