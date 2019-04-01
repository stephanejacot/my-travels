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
          photo= 'https://i.ibb.co/GF00wRS/Madrid.jpg'
        distance="350 km "
    />
        <Travel
          destination="London "
          country="England "
          photo= "https://i.ibb.co/VtPhPbS/Londres.jpg"
          distance="850 km "
        />
      </div>
    );
  }
}

export default App;
