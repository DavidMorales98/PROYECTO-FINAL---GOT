import React, { Component } from "react"
import {Link} from 'react-router-dom'

const list = document.querySelectorAll('.list');
function activeLink(){
list.forEach((item) => 
item.classList.remove('active'));
this.classList.add('active');
}
list.forEach((item)=>
item.addEventListener('click',activeLink));

class Navbar extends Component {
    render() {
        return (
            <nav>
                <img alt ="logo game of thrones" src="https://img.icons8.com/windows/128/null/game-of-thrones.png" />
                <img alt="logo grande game of trones" className="titulo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Game_of_Thrones_2011_logo.svg/2560px-Game_of_Thrones_2011_logo.svg.png" />
                <ul>
                    <li className="list btn-navbar">
                        <Link to='/'>
                            Inicio</Link>
                    </li>
                    <li className="list btn-navbar">
                        <Link to='/novelas' >
                            Novelas</Link>
                    </li>
                    <li className="list btn-navbar" >
                        <Link to='/serietv'>
                            Serie de TV</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;