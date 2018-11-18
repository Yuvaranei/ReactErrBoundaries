import React, { Component } from 'react';
import './App.css';
import ProductList from './ProductList';

const headerStyle = {
  padding:' 20px',
  border: '10px solid forestgreen',
  backgroundColor: 'lightgreen',
  borderRadius: '5px',
  fontFamily: 'cursive',
  fontFeight: '900',
  fontSize: '25px'
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header style={headerStyle}>
          VeggieKart
        </header>
        <ProductList/>
      </div>
    );
  }
}

export default App;
