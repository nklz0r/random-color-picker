import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import { Random } from '../Random/Random';



class App extends React.Component {
  render() {
    return (  
      <div className="App" id="app">
      <h1>Random Color Picker</h1>
      <Random />
    </div>
  );
  };  
}

export default App;
