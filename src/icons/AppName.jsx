import React from 'react';

function AppName() {
    const style = {
        height: "6rem",
        maxWidth: "100%",
        objectFit: "contain"
    };

    return (
        <img src={`${process.env.PUBLIC_URL}/WoMoM.png`} alt="Womom Logo" style={style} />
    );
}

export default AppName;