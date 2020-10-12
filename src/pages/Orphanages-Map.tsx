import React from 'react';
import { Link } from 'react-router-dom';

import { FiPlus } from 'react-icons/fi';
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

            <div></div>

            <Link to='/create-orphanage' className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;