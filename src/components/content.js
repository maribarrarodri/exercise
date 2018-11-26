import React, { Component } from 'react';
import '../css/content.scss';

export default class extends Component {
  state = {
    selected: ''
  }

  handleChange() {
    const selectedValue = document.getElementById('selector').value
    this.setState({ selected: selectedValue });
  }

  render() {
    console.log('content: ', this.props.collection);
    const collection = this.props.collection;
    const suppliers = this.props.suppliers;
    const Hertz = <img src={suppliers[36] ? suppliers[36].logo : 'https://cdn.carrentalgateway.com/media/supplier_logo/small/e9601700e830e69c1baa6739cb0ddeea.png'} alt={suppliers[36] ? suppliers[36].name : 'Hertz'} />;
    const Firefly = <img src={suppliers[37] ? suppliers[37].logo : 'https://cdn.carrentalgateway.com/media/supplier_logo/small/7e95f923c19954c1d4aadc05cbc77520.png'} alt={suppliers[37] ? suppliers[37].name : 'Firefly'} />;
    return (
      <main className="content">

        <div className="selector">
          <select id="selector" onChange={() => this.handleChange()}>
            <option>Selecciona tu vehículo</option>
            {
              collection.map(option => (
                <option value={option.rateReference} key={option.rateReference}>{option.name} - {option.dailyPrice} {option.currency}</option>
              ))
            }
          </select>
        </div>
        
        <div className="product">
          {
            collection.map(option => {
              let output = '';
              const item = (
                <div className="item" key={option.rateReference}>
                  <img src={option.image} alt={option.name} />
                  <p className="item-name">{option.name}</p>
                  <p className="item-supplier">{option.supplierId === 36 ? Hertz : Firefly}</p>
                  <p className="item-dailyPrice"><b>${option.dailyPrice} {option.currency}</b> por día</p>
                  <p className="item-price">Apártalo con ${option.price} {option.currency}</p>
                  <a className="item-deepLink" href={option.deepLink} target="_blank" rel="noopener noreferrer">Reservar ahora</a>
                  <div className="item-features">
                    <b>Especificaciones:</b>
                    <p>Tipo: {option.features.group}</p>
                    <p>Transmisión: {option.features.transmission}</p>
                    <p>Asientos: {option.features.seats}</p>
                    <p>Aire acondicionado: {option.features.aico ? 'Si' : 'No'}</p>
                    <p>Puertas: {option.features.doors}</p>
                    <p>Espacio para maletas: Grandes {option.features.bigSuitcases} / Pequeñas: {option.features.smallSuitcases}</p>
                  </div>
                </div>
              );
              if (this.state.selected === option.rateReference) output = item
              return output
            })
          }
        </div>

      </main>
    );
  }
}
