import React, { Component } from "react"

class Inicio extends Component {
    render() {
        return (
            <div className="index">
                <section id="sec1">
                    <div className="contenedor-texto">
                        <div className="text">
                            <div className="container">
                                <h1>
                                    <div className="animation">
                                        <span className="first">THE WINTER</span>
                                        <span className="oh">
                                            <span className="second">IN COMING</span>
                                        </span>
                                    </div>
                                </h1>
                            </div>
                        </div>
                        <p>Game of Thrones, titulada en español Juego de Tronos, es una serie de televisión estadounidense de fantasía medieval
                            creada por David Benioff y D. B. Weiss para la cadena HBO. Está basada en la serie de novelas Canción de Hielo y Fuego del
                            escritor George R. R. Martin y su trama se centra en las violentas luchas dinásticas entre varias familias nobles por el control
                            del Trono de Hierro del continente de Poniente.
                            La serie fue estrenada el 17 de abril de 2011 en Estados Unidos, el 8 de mayo en Latinoamérica y un día después en España
                            a través de Canal+. A partir de julio de 2012 se estrenó la serie, en abierto, a través de Antena 3. El episodio final de
                            la serie fue emitido el 19 de mayo de 2019.</p>
                    </div>
                </section>
            </div>
        );
    }
}

export default Inicio;