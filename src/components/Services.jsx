import React from 'react'
import '../styles/components/Services.css'
import ForService from '../data/ForServices.json'

const Services = () => {
    return (
        <div className='client-services'>
            <div className="title">Conheça os serviços que te torna mais atrativo para seus clientes</div>
            <div className="container-grid">
                {ForService.map(forservices => (
                    <div className="card" key={forservices.name}>
                        <div className="card-image">
                            <figure className="image is-4by3">
                                <img
                                    src="https://bulma.io/assets/images/placeholders/1280x960.png"
                                    alt="Placeholder image"
                                />
                            </figure>
                        </div>
                        <div className="card-content">
                            <div className="media">

                                <div className="media-content">
                                    <p className="title is-4">{forservices.name}</p>
                                </div>
                            </div>

                            <div className="content">{forservices.description}
                                <div className="subtitle">Planos a partir dê</div>
                                <div className="values">
                                    <p className="title">{forservices.value}</p>
                                    <div className="subtitle">mês</div>
                                </div>
                                <div className="button">Coheça</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services