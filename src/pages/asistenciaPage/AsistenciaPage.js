import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './AsistenciaPage.css'

const FORM_ENDPOINT = "";

const AsistenciaPage = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return (
            <>
                <div className="messageForm">
                    <h2>Gracias por tu mensaje!</h2>
                    <div>Nos vemos pronto!</div>
                </div>
            </>
        );
    }

    return (
        <form
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
        >
            <main className="containerAsistencia">
                <section className="tituloasistencia">
                    <h2>¿Venís o te lo vas a perder? 📆</h2>
                    <h4>¿Dónde nos juntamos?
                        No queremos que te pierdas esta fiesta por nada del mundo.
                        Por eso, acá podrás consultar la dirección de la estancia.

                        Los esperamos a todos a las 17:00 hs para compartir este momento único.

                        ¡No hay excusas para llegar tarde!

                    </h4>
                </section>
                <section className="formularioAsistencia">
                    <div>
                        <legend className="tituloFormulario">Completa el formulario con tus datos!</legend>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input className="form-control" type="text" placeholder="Escriba su nombre" name="firstName"
                               required/>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Apellido</label>
                        <input className="form-control" type="text" placeholder="Escriba su apellido" name="lastName"
                               required/>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Correo electronico</label>
                        <input className="form-control" type="email" placeholder="Tu correo electronico" name="email"
                               required/>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Confirmación de
                            asistencia</label>
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Seleccione la opción</option>
                            <option value="1">Si</option>
                            <option value="2">No</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Elección de Menú</label>
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Seleccione la opción</option>
                            <option value="1">Carnes</option>
                            <option value="2">Veggie</option>
                            <option value="3">Celíacos</option>

                        </select>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Comentarios</label>
                        <textarea className="form-control"  rows="3"></textarea>
                    </div>
                    <div className="botonEnvio">
                        <button type="submit" class="btn btn-dark"> Enviar</button>
                    </div>
                </section>
            </main>
        </form>
    );
};

export default AsistenciaPage;