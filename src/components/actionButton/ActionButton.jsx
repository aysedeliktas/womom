import React from 'react'
import "./ActionButtonStyle.css"
import { Link } from 'react-router-dom'

function ActionButton({ text, action, specificStyle }) {
    return (
        <button 
            className='action-btn'
            onClick={() => action}
            style={specificStyle}>
            {text}
        </button>
    )
}

export default ActionButton