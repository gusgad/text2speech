import React from 'react';
import './Controls.css';

export const Controls = ({speak}) => (
    <div className='Controls-container'>
        <button className='Controls-button stop' onClick={speak}>Stop</button>
        <button className='Controls-button start' onClick={speak}>Speak!</button>
    </div>
)

Controls.propTypes = {
    speak: React.PropTypes.func
};