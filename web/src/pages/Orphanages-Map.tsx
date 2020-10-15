import React from 'react';
import { Link } from 'react-router-dom';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import Leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css'

import '../styles/pages/orphanages-map.css';
import mapMarkerImg from '../images/map-marker.svg';

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [200, 2]
})


function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Logo" />
                    <div className="content">
                        <h2>
                            Escolha um orfanato no mapa
                        </h2>
                        <p>
                            Muitas crianças estão esperando a sua visita!
                        </p>
                    </div>
                </header>
                <footer>
                    <strong>Brasília</strong>
                    <span>Distrito Federal</span>
                </footer>
            </aside>

            <Map
                center={[-15.825297,-47.9372209]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <Marker 
                    icon={mapIcon}
                    position={[-15.825297,-47.9372209]}
                >
                    <Popup closeButton={false} maxWidth={240} minWidth={240} className='map-popup'>
                        Lar das meninas
                        <Link to="/orphanages/1">
                            <FiArrowRight size={20} color="#fff"/>
                        </Link>
                    </Popup>
                </Marker>

            </Map>

            <Link to='' className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;