import React from 'react';
import { Link } from 'react-router-dom';
import { Map, TileLayer } from 'react-leaflet';
import { FiPlus } from 'react-icons/fi';

import 'leaflet/dist/leaflet.css'

import '../styles/pages/orphanages-map.css';
import mapMarkerImg from '../images/map_marker.svg';

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
                zoom={12}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            </Map>

            <Link to='/create-orphanage' className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;