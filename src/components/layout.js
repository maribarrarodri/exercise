import React, { Component } from 'react';
import '../css/layout.scss';

export default class extends Component {
  render() {
    const header = this.props.header;
    return (
      <div className="layout">
        <header className="header">
          <h1>Renta de vehículos en {header.cityName}, {header.countryName}</h1>
          <p>Ubicación: {header.name}</p>
        </header>
        { this.props.children }
        <footer className="footer">Maribel Barranco Rodriguez- 25 Noviembre 2018</footer>
      </div>
    );
  }
}
