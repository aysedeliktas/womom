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
                    <iframe width="100%" height="315" 
                    style={{
                        borderRadius:"8px",
                        margin:"1rem 0"
                    }} 
                    src="https://www.youtube.com/embed/JTZOaEoTAqY?si=IC2-0H58F_Jqq8JD" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <Link
                        to={"/policy"}
                        className={`action-btn proceed-btn visible`}
                    >
                        İlerle
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Promo;
