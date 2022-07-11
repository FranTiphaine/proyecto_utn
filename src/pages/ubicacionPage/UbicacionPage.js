import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './UbicacionPage.css'

const UbicacionPage = () => {
    return (
        <main className="containerAsistencia">
            <section className="tituloasistencia">
                <h2>¿Dónde nos juntamos?</h2>
                <hr></hr>
                <h4>No queremos que te pierdas esta fiesta por nada del mundo.
                    Por eso, acá podrás consultar la dirección de la estancia.
                    Los esperamos a todos a las 17:00 hs para compartir este momento único.
                    ¡No hay excusas para llegar tarde!
                </h4>
            </section>
            <section> ubicacion google</section>
            <hr></hr>
            <section>
                <h2>Estancia La Linda</h2>
                <h4>Oliden 4651, Tortuguitas, Buenos Aires
                    1664 Buenos Aires
                    ¡Te esperamos en Estancia La Linda ❤️ a las 17:00 hs!</h4>
            </section>
        </main>
    );
};

export default UbicacionPage;