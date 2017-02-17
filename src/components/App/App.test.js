import React from 'react';
import ReactDOM from 'react-dom';
import shortid from 'shortid';
import {shallow, mount, render} from 'enzyme';
import sinon from 'sinon';
import App from './App';
import {Options} from '../Options/Options';
import {LanguageSelector} from '../LangSelector/LangSelector';
import {Controls} from '../Controls/Controls';


describe('<Options />', () => {
    const rateChange = sinon.spy();
    const textareaChange = sinon.spy();
    
    const selector = mount(
        <Options rateValue={1.5} pitchValue={1.6} textareaValue={'Test text'} rateChange={rateChange} textareaChange={textareaChange} />
    );
    
    it('renders without errors', () => {
        expect(selector.length).toEqual(1);
    });
    
    it('receives props', () => {
        expect(selector.prop('rateValue')).toBe(1.5);
        expect(selector.prop('pitchValue')).toBe(1.6);
        expect(selector.prop('textareaValue')).toBe('Test text');
    });
    
    it('renders inputs', () => {
        expect(selector.find('.Options-textarea').type()).toEqual('textarea');
    });
    
    it('simulates change events on range inputs', () => {
        selector.find('.Options-input').at(0).simulate('change');
        selector.find('.Options-input').at(1).simulate('change');
        expect(rateChange.calledTwice).toEqual(true);
    });
    
    it('simulates change events on textarea', () => {
        selector.find('.Options-textarea').simulate('change');
        expect(textareaChange.calledOnce).toEqual(true);
    });
});

describe('<LangSelector/>', () => {
    const langChange = sinon.spy();
    
    const lang = [
        {name: 'native', lang: ''},
        {name: 'Google US English', lang: 'en-US'}
    ];
    const selector = mount(
        <LanguageSelector lang={lang} selectedLang={'EN'} langChange={langChange} />
    );
    
    it('renders without errors', () => {
        expect(selector.length).toEqual(1);
    });
    
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
    
    it('simulates change events', () => {
        selector.find('.LanguageSelector-input').simulate('change');
        expect(langChange.calledOnce).toEqual(true);
    });
});

describe('<Controls />', () => {
    const voiceStart = sinon.spy();
    const selector = mount(
        <Controls voiceStart={voiceStart} />
    );
        
    it('renders without errors', () => {
        expect(selector.length).toEqual(1);
    });
    
    it('renders correct buttons', () => {
        expect(selector.find('.Controls-button').at(0).text()).toEqual('Stop');
        
        expect(selector.find('.Controls-button').at(1).text()).toEqual('Speak!');
        
        selector.find('.Controls-container').children().forEach(function (node) {
          expect(node.hasClass('Controls-button')).toEqual(true);
        });
    });
    
    it('simulates click events', () => {
        selector.find('.start').simulate('click');
        expect(voiceStart.calledOnce).toEqual(true);
    });
});