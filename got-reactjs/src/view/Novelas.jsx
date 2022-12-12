import React, { useEffect, useState } from "react"
import { Link } from "react-scroll";
import Books from "../components/Books";

export default function Novelas() {
    const [books, setBooks] = useState([]);
    const fetchBooks = () => {
        fetch("https://anapioficeandfire.com/api/books")
            .then(response => response.json())
            .then(data => setBooks(data))
            .catch(error => console.log(error))
    };
    useEffect(() => {
        fetchBooks();
    }, [])
    return (
        <div className="novelas">
            <section id="novelas2">
                <div className="contenedor-texto"><h2>Novelas</h2>
                    <p>Del universo de La Canción de Hielo y Fuego</p>
                    <Link to="novelas"
                        smooth={true}
                    >Sucesos Importantes</Link>
                </div>
                <div className="contenedor-cards2">
                    <Books books={books}/>
                </div>
            </section>
            <section id="novelas">
                <div className="contenedor-texto"><h2>Sucesos Importantes</h2>
                    <p>Del universo de La Canción de Hielo y Fuego</p>
                    <Link to='novelas2' offset={+100}
                        smooth={true}>Novelas Publicadas</Link>
                </div>
                <div className="contenedor-cards">
                    <div className="timeline">
                        <ul>
                            <li>
                                <div className="content">
                                    <h3>Era del Amanecer</h3>
                                    <p>Los Primeros Hombres, un grupo étnico humano, llegan a Poniente desde el continente oriental, a través de un puente de tierra que conectaba los dos continentes. Los Primeros Hombres introdujeron el bronce, los escudos de cuero y los caballos. Tras los conflictos iniciales, que incluyeron la destrucción del puente de piedra (conocido como el Brazo Roto de Dorne), los Primeros Hombres se hicieron con el control paulatino de Poniente</p>
                                </div>
                                <div className="time">
                                    <h4>-12.000 a.C</h4>
                                </div>
                            </li>
                            <li>
                                <div className="content">
                                    <h3>Edad de los Héroes</h3>
                                    <p>Edad de los Héroes, una era que toma su nombre de los grandes hombres y mujeres que vivieron en esos años de paz y prosperidad que siguieron a la firma del Pacto. Los Primeros Hombres se distancian de muchas de sus costumbres, adoptando muchas tradiciones de los Hijos del Bosque. Muchas casas nobles trazan sus linajes hasta esta era a través de historias, canciones y leyendas</p>
                                </div>
                                <div className="time">
                                    <h4>-10.000 a.C</h4>
                                </div>
                            </li>
                            <li>
                                <div className="content">
                                    <h3>La Invasión Ándala</h3>
                                    <p>Los Ándalos, como se conoce al grupo de hombres de Essos, invaden Poniente con armas de acero y la nueva religión. Luchan contra los Primeros Hombres y los Niños del Bosque, terminando por extinguir a los últimos, por lo menos al sur del Muro. Tras siglos de luchas, los Ándalos establecieron seis reinos al sur, mientras que el norte siguió en poder de los Primeros Hombres, gracias a la situación estratégica de Foso Cailin, capaz de resistir todos los intentos de captura, y sirviendo desde entonces como puerta entre el norte y el sur. Aunque el Norte permanecía seguro, los Niños del Bosque comenzaron su éxodo a las tierras más allá del Muro, replegándose en los bosques del norte profundo</p>
                                </div>
                                <div className="time">
                                    <h4>-6.000 a.C</h4>
                                </div>
                            </li>
                            <li>
                                <div className="content">
                                    <h3>La Era de Valyria</h3>
                                    <p>Los pastores de Valyria descubren que hay nidos de dragones en los Catorce Llamas, un gran anillo de volcanes en la Península Valyria. Doman a los dragones y los usan para crear un gran imperio, derribando al imperio rival de Ghis cinco veces antes de su destrucción final. Comienza el dominio del Feudo Franco de Valyria</p>
                                </div>
                                <div className="time">
                                    <h4>-5.000 a.C</h4>
                                </div>
                            </li>
                            <li>
                                <div className="content">
                                    <h3>Los Siete Reinos</h3>
                                    <p>A lo largo de los siglos que siguen a la Invasión Ándala, los reinos sureños de los Primeros Hombres caen y eventualmente los Ándalos se convierten en la etnia predominante del continente, construyendo seis poderosos reinos</p>
                                </div>
                                <div className="time">
                                    <h4>-3.000 a.C</h4>
                                </div>
                            </li>
                            <li>
                                <div className="content">
                                    <h3>Dinastía Targaryen</h3>
                                    <p>Un siglo tras la Maldición de Valyria, Aegon Targaryen invade, somete y unifica seis de los siete reinos de Poniente bajo su bandera y construye una nueva capital en el lugar donde desembarcó su ejército, llamándola Desembarco del Rey. No consigue conquistar Dorne y le permite permanecer independiente. Con la destrucción del Rey de la Tormenta, Argilac el Arrogante, y la muerte del último Rey del Dominio, el control de Bastión de Tormentas pasa al medio-hermano bastardo de Aegon, Orys Baratheon, y el de Altojardín a Lord Harlen Tyrell. Edmyn Tully de Aguasdulces es nombrado Señor Supremo del Tridente y Vickon Greyjoy de Pyke se convierte en el Señor de las Islas del Hierro</p>
                                </div>
                                <div className="time">
                                    <h4>1 d.C</h4>
                                </div>
                            </li>
                            <li>
                                <div className="content">
                                    <h3>Rebelión de Robert</h3>
                                    <p>Derrota de la Hermandad del Bosque Real por un grupo de caballeros encabezado por un destacamento de la Guardia Real. Arthur Dayne mata al líder de la Hermandad. Jaime Lannister se destaca en la batalla y es nombrado caballero</p>
                                </div>
                                <div className="time">
                                    <h4>281 d.C</h4>
                                </div>
                            </li>
                            <li>
                                <div className="content">
                                    <h3>Reinado de Robert I</h3>
                                    <p>La Rebelión Greyjoy. Balon Greyjoy se nombra como Rey de las Islas del Hierro. Es derrotado y dos de sus hijos mueren. El rey Robert acepta su rendición y el hijo superviviente de Balon, Theon, se convierte en pupilo y rehén de Eddard Stark</p>
                                </div>
                                <div className="time">
                                    <h4>289 d.C</h4>
                                </div>
                            </li>
                            <li>
                                <div className="content">
                                    <h3>Guerra de los Cinco Reyes</h3>
                                    <p>Los Siete Reinos se enfrentan en la Guerra de los Cinco Reyes que sigue a la muerte de Robert Baratheon, con tres candidatos al trono y dos pretendientes separatistas, además de los últimos Targaryen en Essos</p>
                                </div>
                                <div className="time">
                                    <h4>298 d.C</h4>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}