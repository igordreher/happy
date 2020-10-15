import React from 'react';
import { Link } from 'react-router-dom';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { FiPlus, FiArrowRight } from 'react-icons/fi';

import mapMarkerImg from '../images/map-marker.svg';
import mapIcon from '../utils/map-icon'

import '../styles/pages/orphanages-map.css';

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
                center={[-15.825297, -47.9372209]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker
                    icon={mapIcon}
                    position={[-15.825297, -47.9372209]}
                >
                    <Popup closeButton={false} maxWidth={240} minWidth={240} className='map-popup'>
                        Lar das meninas
                        <Link to="/orphanages/1">
                            <FiArrowRight size={20} color="#fff" />
                        </Link>
                    </Popup>
                </Marker>

            </Map>

            <Link to='/orphanages/create' className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;