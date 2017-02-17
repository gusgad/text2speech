import React from 'react';
import './Controls.css';

export const Controls = ({voiceStart}) => (
    <div className='Controls-container'>
        <button className='Controls-button stop' onClick={voiceStart}>Stop</button>
        <button className='Controls-button start' onClick={voiceStart}>Speak!</button>
    </div>
)

Controls.propTypes = {
    speak: React.PropTypes.func
};