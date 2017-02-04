import React from 'react';
import './LangSelector.css';

export const LanguageSelector = (props) => (
    <div className='LanguageSelector-container'>
        <select value={props.value} className="LanguageSelector-input">
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
        </select>
    </div>
)