import React, { useState, useEffect } from 'react';
import "./PromoStyle.css";
import PageHead from '../../components/pageHead/PageHead';
import { Link } from 'react-router-dom';
import { setLocalStorage, getLocalStorage } from '../../utils/LocalStrManager';

function Promo() {
    const [showProceedButton, setShowProceedButton] = useState(false); // Button görünürlüğünü kontrol etmek için state

    useEffect(() => { 
        const watchedStatus = getLocalStorage('isWatched'); 
            setShowProceedButton(watchedStatus);  
            console.log(watchedStatus);
            
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
                        {/* SVG veya görsel eklenebilir */}
                    </div>
                    <p className="promo-content-text">
                        WoMOM, hamilelik sürecini takip eden ve hamilelere eğitim içerikleri sunan bir gebelik uygulamasıdır.
                    </p>
                    <Link
                        to={"https://www.youtube.com/"}
                        className='action-btn watch-btn' /* İzleyelim butonu her zaman görünür olacak */
                        style={{ marginTop: "2rem" }}
                        onClick={handleWatchClick} // Linke tıklandığında butonun görünmesini tetikler
                    >
                        İzleyelim
                    </Link>
                    {/* İlerle butonu başlangıçta gizli ve tıklamadan sonra kalıcı olarak görünür olacak */}
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
