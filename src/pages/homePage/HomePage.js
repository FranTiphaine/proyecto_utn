import React from 'react';
import Card from "react-bootstrap/Card";
import CardGroup from 'react-bootstrap/CardGroup';
import './HomePage.css'

const HomePage = (props) => {
    return (
        <main className="principalHome">

            <section>
                <section>
                    <h2>Bienvenidos a Nuestro <span>Casamiento!</span></h2>
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
                <section>
                <CardGroup>
                    <Card>
                        <Card.Img className="homeImage" src="images/pexels-cleyder-duque-6400831.jpg"/>
                    </Card>
                </CardGroup>
            </section>
            </section>
        </main>
    )
        ;
}

export default HomePage;