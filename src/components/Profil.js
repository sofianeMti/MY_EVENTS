import React, { Component } from 'react';
import '../style/Profil.css'

class Profil extends Component {
    render() {
        const name = sessionStorage.getItem('nom') === null ? '' : sessionStorage.getItem('nom');
        const image = sessionStorage.getItem('image') === null ? '' : sessionStorage.getItem('image');
        return (
            <div>
                <h1 className="titreProfil">Profil de {name}</h1>
                <div className="container bodyProfil">
                    <div className="left">
                        <img src={image} className="im1"/>
                        <h2 className="h2">{name}</h2>
                    </div>
                    <div className="right"></div>
                </div>
            </div>
        );
    }
}
export default Profil;
