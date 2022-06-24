import React from 'react';

import '../../styles/components/layout/Header.css'

const Header = (props) => {
    return (
        <div className="barraNavegacion">
            <header>
                    <h1><a href="/">Casamiento Cami & Fran</a></h1>
            </header>
            <nav>
                <ul>
                    <li><a href="/">Bienvenidos</a></li>
                    <li><a href="asistencia">Confirma tu asistencia</a></li>
                    <li><a href="regalos">Regalos!</a></li>
                    <li><a href="contacto">Dejanos un mensaje</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;