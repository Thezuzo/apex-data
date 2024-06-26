import React from 'react'
import '../styles/routes/Login.css'

const Login = () => {
    return (
        <div>
            <div className="central">
                <div className="card">
                    <div className="field">
                        <h1 className="title">Apex</h1>
                        <p className="control has-icons-left has-icons-right">
                            <input className="input" type="email" placeholder="Email" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                            <span className="icon is-small is-right">
                                <i className="fas fa-check"></i>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left">
                            <input className="input" type="password" placeholder="Senha" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-lock"></i>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control">
                            <button className="button is-success">
                                Login
                            </button>
                            <button className="button is-success">
                                Registre-se
                            </button>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login