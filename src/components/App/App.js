import React, { Component } from 'react';
import './App.css';
import {Header} from '../Header/Header';
import {LanguageSelector} from '../LangSelector/LangSelector';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LanguageSelector value='mango' />
      </div>
    );
  }
}

export default App;
