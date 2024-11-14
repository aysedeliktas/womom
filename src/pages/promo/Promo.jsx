import React, { useState, useEffect } from 'react';
import "./PromoStyle.css";
import PageHead from '../../components/pageHead/PageHead';
import { Link } from 'react-router-dom';
import { setLocalStorage, getLocalStorage } from '../../utils/LocalStrManager';

function Promo() {
    const [showProceedButton, setShowProceedButton] = useState(false); 

    useEffect(() => { 
        const watchedStatus = getLocalStorage('isWatched'); 
            setShowProceedButton(watchedStatus);   
            
    }, []);

    const handleWatchClick = () => {
        setShowProceedButton(true);  
        setLocalStorage('isWatched', true);   
    };

    return (
        <div className="promo-container">
            <PageHead lastPath={""} pageName={"Tanıtım Videosu"} />
            <div className="promo-child-container">
                <div className="promo-content">
                    <h2 className="promo-content-tag">
                        Uygulamayı Tanıyalım
                    </h2>
                    <div className="promo-svg">
                    </div>
                    <p className="promo-content-text">
                        WoMOM, hamilelik sürecini takip eden ve hamilelere eğitim içerikleri sunan bir gebelik uygulamasıdır.
                    </p>
                    <Link
                        to={"https://www.youtube.com/watch?v=JTZOaEoTAqY"}
                        className='action-btn watch-btn'
                        style={{ marginTop: "2rem" }}
                        onClick={handleWatchClick}
                    >
                        İzleyelim
                    </Link>
                    <Link
                        to={"/policy"}
                        className={`action-btn proceed-btn ${showProceedButton ? 'visible' : ''}`}
                    >
                        İlerle
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Promo;
