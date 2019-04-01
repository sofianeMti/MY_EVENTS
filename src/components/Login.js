import React, { Component } from 'react';
import '../style/Login.css'
import Facebook from "./Facebook";


class Login extends Component {
    render() {
        return (
            <div className="login">
             <h1 className="h1">Login</h1>
                <div className="log">
                    <div className="input-group col-sm username">
                        <input type="text" className="form-control" placeholder="Username"/>
                    </div>
                    <div className="input-group col-sm password">
                        <input type="text" className="form-control" placeholder="password"/>
                    </div>
                    <button className="btn btn-dark bt">Valider</button>
                    <form action="/home">
                    <div className="face"><Facebook/></div>
                    </form>

                </div>
            </div>
        );
    }
}
export default Login;
