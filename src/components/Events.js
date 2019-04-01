import React, { Component } from 'react';
import axios from 'axios';
import '../style/Event.css'

class Events extends Component {
    constructor(props){
        super();
        this.state = {
            event:[],
        }
    }
    componentDidMount() {
            const { id } = this.props.match.params;
            console.log(id);
        axios.get('/event/'+id)
            .then(res => {
                console.log(res.data.event);
                this.setState({ event: [res.data.event]});
            })
    }

    render(){
        return(
            <div className="container body2">
                <a href="/home">retour à la liste des events</a>
                {this.state.event.map((array) =>
                    <div className="container-fluid">
                        <h1 className="t1">{array.name.text}</h1>
                        <div className="con">
                            <img src={array.logo.original.url} alt={"picture"}/>
                            <div className="bloc">
                                <div className="btn btn-warning buttons"><a href={'/organize/' + array.id}>Organiser une sortie</a></div>
                                <div className="date col-6"><input type="date" className="form-control"/></div>
                                <div className="lieu1"><p>Lieu : {array.start.timezone}<i className="fas fa-map-marker-alt p-2"></i></p></div>
                            </div>
                            <div className="paragraphe">{array.description.text}</div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default Events;