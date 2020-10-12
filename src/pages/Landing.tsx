import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import '../styles/pages/landing.css';
import logoImg from '../images/logo.svg';


function Landing() {
    return (
        <div id="page-landing">
            <div className="content-wrapper">
                <img src={logoImg} alt="Happy" />

                <main>
                    <h1>Leve felicidade para o mundo</h1>
                    <p>Visite orfanatos e mude o dia de muitas crianças.</p>
                </main>

                <div className="location">
                    <strong>Brasília</strong>
                    <span>Distrito Federal</span>
                </div>

                <a href="" className="enter-app">
                    <FiArrowRight size={32} color="rgba(141, 115, 75, 0.9)" />
                </a>
            </div>
        </div>
    );
}

export default Landing;