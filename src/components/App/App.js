import React, { Component } from 'react';
import './App.css';
import {Header} from '../Header/Header';
import {LanguageSelector} from '../LangSelector/LangSelector';
import {Options} from '../Options/Options';
import {Controls} from '../Controls/Controls';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          lang: 'EN',
          rateValue: 1,
          pitchValue: 1
      };
      
      this.rateChange = this.rateChange.bind(this);
  }
  
  rateChange(e) {
      this.setState({
          rateValue: parseFloat(e.target.value)
      });
      console.log(parseFloat(e.target.value));
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <LanguageSelector value='mango' lang={this.state.lang} />
        <Options rateValue={this.state.rateValue} pitchValue={this.state.pitchValue} rateChange={this.rateChange} />
        <Controls />
      </div>
    );
  }
}

export default App;
