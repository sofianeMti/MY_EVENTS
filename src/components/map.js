import React, { Component } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components'

const Wrapper = styled.div`
    width: $(props => props.width);
    height: $(props => props.height);
`;

class Map extends Component{

    componentDidMount() {
        this.map = L.map('map',{
            center:[58,16],
            zoom: 6,
            zoomControl: false,
        });

        L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
            detectRetina:true,
            maxZoom: 18,
            maxNativeZoom:16,
        }).addTo(this.map);
    }
    render(){
        return <Wrapper width="100px" height="100px" id="map"/>
    }
}

export default Map;