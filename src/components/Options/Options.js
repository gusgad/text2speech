import React from 'react';
import './Options.css';

export const Options = (props) => (
    <div className='Options-container'>
        <label className='Options-label'>Rate:</label>
        <input className='Options-input' name='rate' type='range' min='0' max='3' value='1' step='0.1'/>
    
        <label className='Options-label'>Pitch:</label>
        <input className='Options-input' name='pitch' type='range' min='0' max='2' value='1' step='0.1'/>
    
        <textarea className='Options-textarea' name='text' placeholder='Type and press "Speak!"'></textarea>
    </div>
)