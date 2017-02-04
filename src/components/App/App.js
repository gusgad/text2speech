import React, { Component } from 'react';
import './App.css';
import {Header} from '../Header/Header';
import {LanguageSelector} from '../LangSelector/LangSelector';
import {Options} from '../Options/Options';
import {Controls} from '../Controls/Controls';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LanguageSelector value='mango' />
        <Options />
        <Controls />
      </div>
    );
  }
}

export default App;
