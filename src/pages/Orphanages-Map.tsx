import React from 'react';

import '../styles/pages/orphanages-map.css'
import mapMarkerImg from '../images/map_marker.svg';

function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Logo" />
                    <h2>
                        Escolha um orfanato no mapa
                    </h2>
                    <p>
                        Muitas crianças estão esperando a sua visita!
                    </p>
                </header>
                <footer>
                    <strong>Brasília</strong>
                    <span>Distrito Federal</span>
                </footer>
            </aside>

            <div></div>
        </div>
    );
}

export default OrphanagesMap;