import React, { Component } from 'react';
import '../style/Header.css'

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
                    <a href="/home" className="events">My_events</a>
                    <a href="/" className="profil"><i className="fas fa-user fa-2x"></i></a>
                </nav>
            </div>
        );
    }
}

export default Header;
