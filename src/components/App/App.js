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
          lang: [],
          selectedLang: '',
          langWarning: false,
          rateValue: 1,
          pitchValue: 1,
          textareaValue: ''
      };
      
      this.utterance = new SpeechSynthesisUtterance();
      
      this.rateChange = this.rateChange.bind(this);
      this.langChange = this.langChange.bind(this);
      this.textareaChange = this.textareaChange.bind(this);
      this.generateVoices = this.generateVoices.bind(this);
      this.speak = this.speak.bind(this);
  }
  
  rateChange(e) {
      let rangeType = `${e.target.name}Value`;
      let rangeValue = e.target.value;
      this.setState({
          [rangeType]: parseFloat(rangeValue)
      });
      
      this.utterance.rate = this.state.rateValue;
      this.utterance.pitch = this.state.pitchValue;
  }


  langChange(e) {
      let selectedVoice = this.state.lang.find(lang => {
          if (lang.lang === e.target.value) {
              return lang.lang;
          } else {
              return null;
          }
      });
      
      this.utterance.voice = selectedVoice;
      this.setState({
          selectedLang: e.target.value
      });
  }
    
  textareaChange(e) {
      this.setState({
          textareaValue: e.target.value
      });
      this.utterance.text = this.state.textareaValue;
  }
    
  generateVoices() {
      let voices = speechSynthesis.getVoices();
      this.setState({
          lang: voices
      });
  }
    
  speak(e) {
      if (e.target.className.split(' ')[1] === 'stop') {
          speechSynthesis.cancel();
      } else if (e.target.className.split(' ')[1] === 'start') {
          let utterance = this.utterance;
          speechSynthesis.speak(utterance);
      }
      
      if (this.state.selectedLang === '') {
          this.setState({
              langWarning: true
          });
      } else {
          this.setState({
              langWarning: false
          });
      } 
  }

  componentDidMount() {
      speechSynthesis.addEventListener('voiceschanged', this.generateVoices);
  }
  
  render() {
      return (
          <div className="App">
            <Header />
            <LanguageSelector lang={this.state.lang} selectedLang={this.state.selectedLang} langWarning={this.state.langWarning} langChange={this.langChange}/>
            <Options rateValue={this.state.rateValue} pitchValue={this.state.pitchValue} rateChange={this.rateChange} textareaValue={this.state.textareaValue} textareaChange={this.textareaChange} />
            <Controls speak={this.speak}/>
          </div>
        );
     }
  }

export default App;