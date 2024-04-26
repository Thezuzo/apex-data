import React from 'react'
import '../styles/components/Navbar.css'
import dbimage from '../assets/db.png'

const Navbar = () => {

    const hospedagens = [
        { name: "Hospedagem de site" },
        { name: "Hospedagem dedicada" },
        { name: "Hospedagem Wordpress" },
        { name: "SSL" },
        { name: "Registro de dominio" }
    ]

    return (
        <div>
            <div className="navbar-container">
                <nav>
                    <a href="#">
                        <img src={dbimage} alt="hDC Host" className="logo" />
                    </a>
                    <ul className="navbar-itens">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Preços</a>
                        </li>
                        <li>
                            <a href="#">Contato</a>
                        </li>
                        <li>
                            <a href="#" className="default-btn">Entre</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="subNavbar">
                <ul>
                    <li><a href="#">Hospedagem</a>
                        <ul className='dropdown'>
                            {hospedagens.map(hospedagem => (
                                <li key={hospedagem.name}>
                                    <a href="#">{hospedagem.name}</a>
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
                <ul>
                    <li><a href="#">E-mail</a></li>
                </ul>
                <ul>
                    <li><a href="#">Registre seu dominio</a></li>
                </ul>
                <ul>
                    <li><a href="#">Nuvem e vps</a></li>
                </ul>
                <ul>
                    <li><a href="#">Sobre nós</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar