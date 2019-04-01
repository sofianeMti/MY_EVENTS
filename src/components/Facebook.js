import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { Route, Redirect } from 'react-router';
import axios from "axios";


class Facebook extends Component {
    constructor(props){
        super();
        this.state = {
            isLoggedIn: false,
            userId: '',
            name:'',
            email:'',
            picture:'',
            array:[],
            photo:''
        }
    }
    responseFacebook = response =>{
        console.log(response.name);
        console.log(response.email);
        console.log(this.state.isLoggedIn);
        console.log('clicked');
        this.setState({
            isLoggedIn:true,
            array : response.name,
            photo : response.picture.data.url,
        });
        let name = this.state.array;
        let img = this.state.photo;
        sessionStorage.setItem('nom', name);
        sessionStorage.setItem('image', img);
        //sessionStorage.setItem('image', img);
        //const nameFacebook = sessionStorage.getItem('nom') === null ? null : sessionStorage.getItem('nom');
        //console.log(this.state.array);
        //axios.post('/home', {data: name})
        //console.log(this.state.array);
        //axios.post('/home', {data: name})
    };
    render() {
        let fb;

        if(this.state.isLoggedIn){
            fb = null;
            return <Redirect
                to={{
                    pathname: '/home',
                    state: {
                        pseudo : this.state.array,
                        pictures: this.state.photo
                    }
                }}
            />
        }else{
            fb = (<FacebookLogin
                appId="2290192257861174"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />)
        }
        return <div>{fb}</div>
    }
}
export default Facebook;
