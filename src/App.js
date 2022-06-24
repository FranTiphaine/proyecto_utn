import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';
import AsistenciaPage from './pages/AsistenciaPage';
import RegalosPage from './pages/RegalosPage';
import ContactoPage from './pages/ContactoPage';


function App() {
    return (
      <div className="app">


        <BrowserRouter>
            <Header />
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