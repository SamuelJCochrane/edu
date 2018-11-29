import React, { Component } from 'react';
import { Playground } from './js';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Playground.Playground />
      </div>
    );
  }
}

export default App;
