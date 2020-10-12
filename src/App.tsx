import React from 'react';

import './styles/global.css';
import './styles/pages/landing.css';
import buttImg from './images/button.svg';
import logoImg from './images/logo.svg';

function App() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy"/>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite o orfanato e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Brasília</strong>
          <span>Distrito Federal</span>
        </div>
        
        <a href="" className="enter-app">
          <img src={buttImg} alt="Entrar"/>
        </a>
      </div>
    </div>
  );
}

export default App;
