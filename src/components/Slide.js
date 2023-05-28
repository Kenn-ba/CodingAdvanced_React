import React from 'react';
import groenplaats from './images/groenplaats.png';
import grote_markt from './images/grote_markt.png';
import schoenmarkt from './images/schoenmarkt.png';

export default function Slide() {
  return (
    <div className="slideWrapper">
      <div className="card" style={{ backgroundImage: `url(${groenplaats})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <h2 className="location">Groenplaats</h2>
        <h3 className="location--address">dsvs</h3>
        <p className="location--distance">vx</p>
      </div>
      <div className="card" style={{ backgroundImage: `url(${grote_markt})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <h2 className="location">Grote Markt</h2>
        <h3 className="location--address"></h3>
        <p className="location--distance"></p>
      </div>
      <div className="card" style={{ backgroundImage: `url(${schoenmarkt})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <h2 className="location">Schoenmarkt</h2>
        <h3 className="location--address"></h3>
        <p className="location--distance"></p>
      </div>
    </div>
  );
}
