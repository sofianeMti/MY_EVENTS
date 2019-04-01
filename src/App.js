import React, { Component } from 'react';
import './style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Events from "./components/Events";
import Login from "./components/Login";
import Organize from "./components/Organize";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Profil from "./components/Profil";

class App extends Component {
  render() {
    return (
        <div>
            <Header/>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route  path="/home" component={HomePage} />
                    <Route  path="/event/:id" component={Events} />
                    <Route  path="/organize/:id" component={Organize} />
                    <Route  path="/profil/:name" component={Profil}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
  }
}

export default App;
