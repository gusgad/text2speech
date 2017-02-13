import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import App from './App';
import {Options} from '../Options/Options';
import {LanguageSelector} from '../LangSelector/LangSelector';


it('renders Options component', () => {
    const selector = mount(
        <Options rateValue={1.5} pitchValue={1.6} textareaValue={'Test text'}/>
    );
     
    expect(selector.find('.Options-textarea').type()).toEqual('textarea');
    
    expect(selector.prop('rateValue')).toBe(1.5);
    expect(selector.prop('pitchValue')).toBe(1.6);
    expect(selector.prop('textareaValue')).toBe('Test text');
});

it('renders LangSelector component', () => {
    let lang = [
        {name: 'Google Deutsch', lang: 'de-DE'},
        {name: 'Google US English', lang: 'en-US'}
    ];
    const selector = mount(
        <LanguageSelector lang={lang} selectedLang={'EN'} />
    );
     
    expect(selector.find('.LanguageSelector-input').type()).toEqual('select');
    expect(selector.prop('lang')).toBe(lang);
    expect(selector.prop('selectedLang')).toBe('EN');
})


