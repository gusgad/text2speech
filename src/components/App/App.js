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
      this.langChange = this.langChange.bind(this);
  }
  
  rateChange(e) {
      let rangeType = `${e.target.name}Value`;
      let rangeValue = e.target.value;
      this.setState({
          [rangeType]: parseFloat(rangeValue)
      });
      console.log('rate val:', parseFloat(e.target.value));
  }


  langChange(e) {
      console.log('sup')
  }

  
  render() {
    return (
      <div className="App">
        <Header />
        <LanguageSelector lang={this.state.lang} langeChange={this.langChange}/>
        <Options rateValue={this.state.rateValue} pitchValue={this.state.pitchValue} rateChange={this.rateChange} />
        <Controls />
      </div>
    );
  }
}

export default App;
