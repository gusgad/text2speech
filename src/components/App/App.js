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
      console.log('rate val:', parseFloat(e.target.value));
  }


  langChange(e) {
      let selectedVoice = this.state.lang.find(lang => {
          if (lang.lang === e.target.value) {
              return lang.lang;
          } else {
              return null;
          }
      });
      console.log(selectedVoice)
      this.utterance.voice = selectedVoice;
      console.log(e.target.value)
      this.setState({
          selectedLang: e.target.value
      });
      if (e.target.value === '') {
          console.log('porco dio')
      }
  }
    
  textareaChange(e) {
      this.utterance.text = e.target.value;
  }
    
  generateVoices() {
      let voices = speechSynthesis.getVoices();
      console.log(voices)
      this.setState({
          lang: voices
      });
  }
    
  speak(e) {
      let utterance = this.utterance;
      speechSynthesis.speak(utterance);
  }

  componentDidMount() {
      speechSynthesis.addEventListener('voiceschanged', this.generateVoices);
  }
  
  render() {
      return (
          <div className="App">
            <Header />
            <LanguageSelector lang={this.state.lang} selectedLang={this.state.selectedLang} langChange={this.langChange}/>
            <Options rateValue={this.state.rateValue} pitchValue={this.state.pitchValue} rateChange={this.rateChange} textareaValue={this.state.textareaValue} textareaChange={this.textareaChange} />
            <Controls speak={this.speak}/>
          </div>
        );
     }
  }

export default App;