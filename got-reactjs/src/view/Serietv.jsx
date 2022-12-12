import React, { useEffect, useState } from "react"
import Characters from "../components/Characters";



export default function SerieTV() {
    const [characters, setCharacters] = useState([]);
    const fetchCharacters = () => {
        fetch("https://thronesapi.com/api/v2/Characters")
            .then(response => response.json())
            .then(data => setCharacters(data))
            .catch(error => console.log(error))
    };
    useEffect(() => {
        fetchCharacters();
    }, [])
    return (
        <div className="serietv">
            <section id="personajes">
                <div className="contenedor-texto"><h2>Personajes Principales</h2>
                </div>
                <div className="contenedor-cards">
                    <Characters characters={characters} />
                </div>
            </section>
        </div>
    );
}
