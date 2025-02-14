import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calculadora from './Componentes/Calculadora/Calculadora'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Tarea Calculadora en React</h1>
        </header>
        <Calculadora />
      </div>
    );
  }
}

export default App;
