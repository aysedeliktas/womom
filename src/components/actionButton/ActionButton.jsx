import React from 'react'
import "./ActionButtonStyle.css"
import { Link } from 'react-router-dom'

function ActionButton({ text, action, specificStyle,to }) {
    return (
        <Link 
            to={to}
            className='action-btn'
            onClick={() => action}
            style={specificStyle}>
            {text}
        </Link>
    )
}

export default ActionButton