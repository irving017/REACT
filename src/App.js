import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import LoginContainer from './components/LoginContainer'
import ProductsContainer from './components/products/ProductsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginContainer/>
        <ProductsContainer/>
      </div>
    );
  }
}

export default App;
