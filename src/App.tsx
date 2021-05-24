import React from 'react';
import logo from './logo.svg';
import './App.css';
import { PetInfo } from './components/PetInfo';
import { UpDownCounter } from './components/UpDownCounter';
import CoinListItem from './components/CoinListItem';
import MakeMoney from './components/MakeMoney';

function App() {
  return (
    <div className="App">
      <PetInfo />
      <UpDownCounter />
      <UpDownCounter />
      <UpDownCounter />
      <MakeMoney/>
    </div>
  );
}

export default App;
