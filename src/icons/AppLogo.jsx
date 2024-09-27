import React from 'react'

function AppLogo() {
    const style = {
        height: "12rem",
        maxWidth: "100%",
        objectFit: "contain"
    };

    return (
        <img src={`${process.env.PUBLIC_URL}/womomlogo2.png`} alt="Womom Logo" style={style} />
    );
}

export default AppLogo