import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './UbicacionPage.css'

const UbicacionPage = () => {
    return (
        <main className="containerAsistencia">
            <section className="tituloasistencia">
                <h2>¿Dónde nos juntamos?</h2>
                <h5 className="ubicacionTitular">No queremos que te pierdas esta fiesta por nada del mundo.
                    Por eso, acá podrás consultar la dirección de la estancia.
                    Los esperamos a todos a las 17:00 hs para compartir este momento único.
                    ¡No hay excusas para llegar tarde!
                </h5>
            </section>
            <section className="contenedorMap">
                <section className="map1">

                    <div className="mapouter">
                        <div className="gmap_canvas">
                            {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                            <iframe className="gmap_iframe" width="100%" frameBorder="0" scrolling="yes"
                                    marginHeight="0"
                                    marginWidth="0"
                                    src="https://maps.google.com/maps?width=620&amp;height=400&amp;hl=en&amp;q=Oliden 4651, Tortuguitas, Buenos Aires 1664 &amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                        </div>
                    </div>
                </section>
                <section className="mapText">
                    <h2>Estancia La Linda</h2>
                    <h4>Oliden 4651, Tortuguitas, Buenos Aires
                        1664 Buenos Aires
                        ¡Te esperamos en Estancia La Linda ❤️ a las 17:00 hs!</h4>
                </section>
            </section>
        </main>
    );
};

export default UbicacionPage;