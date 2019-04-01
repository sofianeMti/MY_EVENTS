import React, { Component } from 'react';
import '../style/HomePage.css'
import axios from "axios";

class HomePage extends Component {
    constructor(props){
        super();
        this.state = {
            data : [],
            categ : [],
            filtre : '',
            position: '',
        }
    }
    componentDidMount() {
        axios.get('/home')
            .then(res => {
                this.setState({
                    data: res.data.event
                });
            });
        axios.get('/categories')
            .then(res =>{
                const categ = res.data.cate.categories;
                this.setState({categ});
            });
    }

    //RECUPERATION DES CATEGORIES
    categorie = (e) => {
        const categorie = e.target.value;
        this.setState({filtre : categorie});
        console.log(this.state.filtre);
    };
    //RECUPERATION DES LIEU
    lieu = (e) => {
        const lieux = e.target.value;
        this.setState({position : lieux});
        console.log(this.state.position);
    };

    //FILTER DES EVENTS
    filter = () => {
        console.log(this.state.filtre);
        let categorie = this.state.filtre;
        let lieux = this.state.position;
        axios.post('/home', {
            data: categorie,
            array: lieux,
        }).then(reponse => {
            this.setState({
                data: reponse.data.NewEvent.events
            });
        });
    };

    render() {
        console.log(sessionStorage.getItem('nom'));
        const name = sessionStorage.getItem('nom') === null ? '' : sessionStorage.getItem('nom');
        //const image = sessionStorage.getItem('image') === null ? '' : sessionStorage.getItem('image');
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="menu col-3">
                        <h3 className="titre1">filtres</h3>
                        <div className="input-group catégorie">
                            <select className="custom-select" id="inputGroupSelect04" onChange={this.categorie}>
                                {this.state.categ
                                    ? this.state.categ.map((categories, i) =>{
                                        return <option key={i+'categorie'} value={categories.id}>{categories.name}</option>
                                    })  : <option>vide</option>
                                }
                            </select>
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control lieu" onChange={this.lieu} placeholder="Lieu"/>
                        </div>

                        <div className="button">
                            <a href="#" className="form-inline filter"><span onClick={this.filter}>Filter</span><i className="fas fa-greater-than p-3"/></a>
                        </div>
                    </div>
                    <div className="body">
                        <h2 className="t1">Bienvenue {name}</h2>
                        <h3 className="titre2">events à venir</h3>
                        {this.state.data === null ?  <h1 className="red">Chargement...</h1> :
                            this.state.data.map((array, i)=>{
                            const img = array.logo === null ? '' : array.logo.original.url;
                            const id = array.id === null ? '' : array.id;
                            const description = array.name.text === null ? '' : array.name.text;
                            return (<div className="container col-11 event"  key={i+'div'}>
                                <div className="text"><p className="description" key={i+'text'}>{description}</p></div>
                                <div className="pictures"><img src={img}  key={i+'img'} className="images"/></div>
                                <div className="btn btn-warning col-3 savoir"><a href={'/event/' + id}>En savoir +</a></div>
                            </div>);}
                        )}
                    </div>
                </div>

            </div>
        );
    }
}

export default HomePage;
