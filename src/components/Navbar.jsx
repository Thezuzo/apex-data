import React from 'react'
import '../styles/components/Navbar.css'
import dbimage from '../assets/db.png'

//react router
import { Link } from 'react-router-dom'

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
                            <Link to="/apex-data/">Home</Link>
                        </li>
                        <li>
                            <Link to="/">Preços</Link>
                        </li>
                        <li>
                            <Link to="/apex-data/contact">Contato</Link>
                        </li>
                        <li>
                            <Link to="/login" className="default-btn">Entre</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="subNavbar">
                <ul>
                    <li><Link to="/">Hospedagem</Link>
                        <ul className='dropdown'>
                            {hospedagens.map(hospedagem => (
                                <li key={hospedagem.name}>
                                    <Link to="/">{hospedagem.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
                <ul>
                    <li><Link to="/">E-mail</Link></li>
                </ul>
                <ul>
                    <li><Link to="/">Registre seu dominio</Link></li>
                </ul>
                <ul>
                    <li><Link to="/">Nuvem e vps</Link></li>
                </ul>
                <ul>
                    <li><Link to="/">Sobre nós</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar