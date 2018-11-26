import React, { Component } from 'react';
import axios from 'axios';

import Layout from '../components/layout';
import Content from '../components/content';

export default class extends Component {

  state = {
    data: {},
    header: {},
    suppliers: {},
    collection: []
  }

  async getData() {
    const cors = 'https://cors-anywhere.herokuapp.com/'; // permite hacer request sin conflictos locales por http vs https
    const api = 'https://rc.aeromexico.io/api/v1/am-titanium-api/vehicles/available?lang=es&driverAge=35&driverCountryCode=mx&pickUpDateTime=2019-04-12T13:20:00&pickUpLocationCode=CUN&dropOffDateTime=2019-04-15T13:20:00&dropOffLocationCode=CUN';
    const url = `${cors}${api}`
    const res = await axios.get(url);
    const { data } = await res;
    this.setState({ data: data })
    this.setState({ header: data.dropOffLocation })
    this.setState({ suppliers: data.availableSuppliers })
    this.setState({ collection: data.options._collection })
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    // console.log('data: ', this.state);
    return (
      <Layout header={this.state.header}>
        <Content suppliers={this.state.suppliers} collection={this.state.collection} />
      </Layout>
    );
  }

}
