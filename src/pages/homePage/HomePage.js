import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css';

const HomePage = (props) => {
    return (
        <main className="contenedorPrincipalHome">

            <section className="contenedorHome1">
                <section>
                    <h2>Bienvenidos a Nuestro Casamiento!</h2>
                </section>
                <section className="contenedorImagenes">
                    <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="images/franycami1.jpg" className=" rounded mx-auto w-100" alt="Fran y Cami 2"></img>
                            </div>
                            <div className="carousel-item">
                                <img src="images/franycami2.jpg" className=" rounded mx-auto w-100" alt="Fran y Cami 2"></img>
                            </div>
                            <div className="carousel-item">
                                <img src="images/franycami3.jpg" className=" rounded mx-auto w-100" alt="Fran y Cami 3"></img>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </section>
                <section>
                    <h4>¡Estamos muy felices!</h4>
                    <p>
                        Queremos compartir con ustedes todo nuestro amor. Para eso, estamos preparando un casamiento
                        que hará historia, donde habrá muchas emociones y alegría.
                        Hemos vivido muchos momentos juntos, y será una fiesta inolvidable en la cual celebraremos
                        junto a ustedes nuestra unión.
                        ¡Nos vemos pronto! ❤️
                        P.D.: ¡Confirmen su asistencia lo antes posible!
                    </p>
                </section>
            </section>
        </main>
)
;
}

export default HomePage;