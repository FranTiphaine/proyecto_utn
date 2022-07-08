import React from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav} from "react-bootstrap";


import './Navbar.css'


const Navigator = (props) => {
    return (
        <Navbar className="barraNavegacion" expand="lg">
            <Container fluid>
                <Navbar.Brand><Link to='/'>CASAMIENTO "FRAN & CAMI"</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Link to="/" className="navbar-item">Bienvenidos</Link>
                        <Link to="asistencia" className="navbar-item">Asistencia</Link>
                        <Link to="regalos" className="navbar-item">Regalos</Link>
                        <Link to="contacto" className="navbar-item">Mensajes</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    );
}

export default Navigator;