import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme';
import sinon from 'sinon';
import App from './App';
import {Options} from '../Options/Options';
import {LanguageSelector} from '../LangSelector/LangSelector';
import {Controls} from '../Controls/Controls';


describe('<Options />', () => {
    const selector = mount(
        <Options rateValue={1.5} pitchValue={1.6} textareaValue={'Test text'}/>
    );
    it('receives props', () => {
        expect(selector.prop('rateValue')).toBe(1.5);
        expect(selector.prop('pitchValue')).toBe(1.6);
        expect(selector.prop('textareaValue')).toBe('Test text');
    });
    
    it('renders inputs', () => {
        expect(selector.find('.Options-textarea').type()).toEqual('textarea');
    });
});

describe('<LangSelector/>', () => {
    let lang = [
        {name: 'native', lang: ''},
        {name: 'Google US English', lang: 'en-US'}
    ];
    const selector = mount(
        <LanguageSelector lang={lang} selectedLang={'EN'} />
    );
    
    it('correct input types', () => {
        expect(selector.find('.LanguageSelector-input').type()).toEqual('select');
    });
    
    it('renders options correctly', () => {
        expect(selector.find('.LanguageSelector-input').text()).toEqual('Select a language US English - (en-US)');
    });
    
    it('receives props', () => {
        expect(selector.prop('lang')).toBe(lang);
        expect(selector.prop('selectedLang')).toBe('EN');
    });
});

describe('<Controls />', () => {
    const selector = mount(
        <Controls />
    );
});














