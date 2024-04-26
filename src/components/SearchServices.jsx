import React from 'react'
import '../styles/components/SearchServices.css'

const SearchServices = () => {
    const servicesType = [
        { name: ".net", value: "R$0,00", payday: "tri" },
        { name: ".com", value: "R$0,00", payday: "tri" },
        { name: ".com.br", value: "R$0,00", payday: "tri" },
        { name: ".store", value: "R$0,00", payday: "tri" },
        { name: ".org", value: "R$0,00", payday: "tri" },
        { name: ".online", value: "R$0,00", payday: "tri" },
        { name: ".site", value: "R$0,00", payday: "tri" }
    ]

    return (
        <div className='Search-main'>
            <div className="Search-services">
                <h2 className="subtitle">Que tal verificar a disponibilidade do seu dominio web?</h2>
                <p>Antes de registrar um domínio, você precisamos verificar sua disponibilidade</p>
                <div className="field has-addons">
                    <div className="control">
                        <input className="input" type="text" placeholder="www.seudominio.com" />
                    </div>
                    <div className="control">
                        <button className="button is-info">
                            Procurar
                        </button>
                    </div>
                </div>
            </div>
            <div className="domains">
                <h2 className="subtitle">Dê uma olhada nos dominios mais utilizados</h2>
                <ul className="itens">
                    {servicesType.map(service => (
                        <li key={service.name}>
                            <a href="#">
                            <h1>{service.name} {service.value}/{service.payday}</h1>
                            </a>
                        </li>
                    ))}
                </ul>
                <p>*Valores referente ao trimestre</p>
            </div>
        </div>
    )
}

export default SearchServices