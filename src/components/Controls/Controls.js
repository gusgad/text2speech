import React from 'react';
import './Controls.css';

export const Controls = ({speak}) => (
    <div className='Controls-container'>
        <button className='Controls-button'>Stop</button>
        <button className='Controls-button speak' onClick={speak}>Speak!</button>
    </div>
)