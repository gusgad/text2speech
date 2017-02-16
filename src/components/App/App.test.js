import React from 'react';
import ReactDOM from 'react-dom';
import shortid from 'shortid';
import {shallow, mount, render} from 'enzyme';
import sinon from 'sinon';
import {Options} from '../Options/Options';
import {LanguageSelector} from '../LangSelector/LangSelector';
import {Controls} from '../Controls/Controls';



describe('<Options />', () => {
    const selector = mount(
        <Options rateValue={1.5} pitchValue={1.6} textareaValue={'Test text'}/>
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
});

describe('<LangSelector/>', () => {
    let lang = [
        {name: 'native', lang: ''},
        {name: 'Google US English', lang: 'en-US'}
    ];
    const selector = mount(
        <LanguageSelector lang={lang} selectedLang={'EN'} />
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
});

describe('<Controls />', () => {
    const speak = sinon.spy();
    const selector = mount(
        <Controls speak={speak} />
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
        expect(speak.calledOnce).toEqual(true);
    });
});














