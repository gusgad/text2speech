import React from 'react';
import './LangSelector.css';

export const LanguageSelector = (props) => (
    <div className='LanguageSelector-container'>
        <select onChange={props.langChange} className="LanguageSelector-input">
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">{props.lang}</option>
            <option value="mango">Mango</option>
        </select>
    </div>
)