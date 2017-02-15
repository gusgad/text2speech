import React from 'react';
import './Options.css';

export const Options = (props) => (
    <div className='Options-container'>
        <label className='Options-label'>Rate:</label>
        <input className='Options-input' name='rate' type='range' min='0' max='2' value={props.rateValue} step='0.1' onChange={props.rateChange} />
    
        <label className='Options-label'>Pitch:</label>
        <input className='Options-input' name='pitch' type='range' min='0' max='2' value={props.pitchValue} step='0.1' onChange={props.rateChange} />
    
        <textarea className='Options-textarea' name='text' placeholder='Type and press "Speak!"' defaultValue={props.textareaValue} onChange={props.textareaChange}></textarea>
    </div>
)

Options.propTypes = {
    rateValue: React.PropTypes.number.isRequired,
    pitchValue: React.PropTypes.number.isRequired
};