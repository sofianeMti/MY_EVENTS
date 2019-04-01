import React, { Component } from 'react';
import '../style/Organize.css';
import openSocket from 'socket.io-client';
import axios from "axios";
import Map from "./map";


class Organize extends Component {
    constructor(props){
        super();
        this.state = {
            message:'',
            newData:[],
            event:[],
        };
        this.socket = openSocket('http://localhost:5000');

        this.socket.on('NewMessage', (data) => {
            this.setState({newData: [...this.state.newData, data]});
        })
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        console.log(id);
        axios.get('/organize/'+id)
            .then(res => {
                console.log(res.data.event);
                this.setState({ event: [res.data.event]});
            })
    }
    Message = (event) => {
        this.setState({
            message: event.target.value
        }, function () {
            console.log(this.state.message);
        })
    };
    Send = (e) => {
      e.preventDefault();
      const message = this.state.message;
        this.socket.emit('message', message);
        this.setState({
            message: ''
        })
    };
    render() {
        console.log(this.state.newData);
        const name = sessionStorage.getItem('nom') === null ? '' : sessionStorage.getItem('nom');
        return (
            <div className="organize">
                <a href="/home" className="return">return home</a>
                {
                    this.state.event.map((array, i) => {
                        return <h1 className="sortie" key={'titre' + i}>{array.name.text}</h1>
                    })
                }
                <div className="map"><Map/></div>
                <div className="participants">
                    <h3 className="p1">Participants</h3>
                    <p className="connecté"><a href={'/profil/' + name}> - {name}</a></p>
                </div>
                <div className="chat">
                    <h3 className="p2">Chat  <i className="far fa-comments lo"/></h3>
                    <div className="mess">
                    <div className="bubble">
                        {this.state.newData.map((array) =>
                            <div className="bubble-text s">
                            <h4>{name}</h4>
                                <p className="p0">{array.messages}</p>
                            </div>
                        )}
                    </div>
                    </div>
                    <form onSubmit={this.Send.bind(this)}>
                    <div className="input-group col-11 message">
                        <input type="text" className="form-control" onChange={this.Message.bind(this)} value={this.state.message} placeholder="Entrer votre message"/>
                        <div className="btn btn-warning but"><a onClick={this.Send.bind(this)}>Send  <i className="fas fa-paper-plane"></i></a></div>

                    </div>
                    </form>
                </div>
            </div>
        );
    }
}
export default Organize;
