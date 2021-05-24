import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PetInfo } from './components/PetInfo';
import { UpDownCounter } from './components/UpDownCounter';

function App() {
  return (
    <div className="App">
      <PetInfo />
      <UpDownCounter />
      <UpDownCounter />
      <UpDownCounter />
    </div>
  );
}

export default App;
