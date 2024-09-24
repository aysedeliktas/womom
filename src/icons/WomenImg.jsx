import React from 'react'

function WomenImg() {
    const contStyle = {
        width:"100%",
        height:"100%",
        padding:"0",
        justifyContent:"start", 
        display: "flex",
        alignItems: "end",
        justifyContent: "start",
    }

    const style = {
        height: "100%",
        maxHeight:"31rem",
        maxWidth: "100%",
        objectFit: "contain"
    };

    return (
        <div style={contStyle}>
            <img src={`${process.env.PUBLIC_URL}/womenn.jpg`} alt="Womom Logo" style={style} />
        </div>
    );
}

export default WomenImg