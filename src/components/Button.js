import React from 'react';
import '../static/css/components/Button.css';

export default function Button({ logo, text, func }) {
    return (
        <div className='button-container' onClick={func}>
            <img className='button-logo' src={require('../static/img/' + logo + '.png')} alt={logo + ' logo'}/>
            <p className='button-text'>{text}</p>
        </div>
    )
}