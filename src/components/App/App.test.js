import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import App from './App';
import {LanguageSelector} from '../LangSelector/LangSelector';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders selectors', () => {
    const selector = shallow(
        <LanguageSelector value='mango' />
    );
     
    expect(selector.find('.LanguageSelector-input').type()).toEqual('select');
    expect(selector.find('.LanguageSelector-input').prop('value')).toEqual('mango');
})


