import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Travel from './Travel'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Travel
          destination="Madrid "
          country="Spain "
          photo="à charger "
          distance="350 km "
      />
        <Travel
          destination="London "
          country="England "
          photo= "à charger "
          distance="850 km "
        />
      </div>
    );
  }
}

export default App;
