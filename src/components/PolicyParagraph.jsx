import React from 'react'

function PolicyParagraph({ text }) {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <p>
                {text}
            </p> 
        </div>
    )
}

export default PolicyParagraph