import React from 'react';
import shortid from 'shortid';
import './LangSelector.css';

export const LanguageSelector = (props) => (
    <div className='LanguageSelector-container'>
        <select onChange={props.langChange} className="LanguageSelector-input" value={props.selectedLang}>
            {props.lang.map((option, index) => {
                if (index === 0) {
                    return <option key={shortid.generate()} value={option.lang}>Select a language</option>
                } else {
                    return <option key={shortid.generate()} value={option.lang}>{option.name.replace('Google', '')} - ({option.lang})</option>
                }
            })}
        </select>
    </div>
)

LanguageSelector.propTypes = {
    lang: React.PropTypes.array.isRequired,
};