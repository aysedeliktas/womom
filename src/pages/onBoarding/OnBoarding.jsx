import React, { useEffect, useState } from 'react';
import "./OnBoardingStyle.css";
import { Link } from 'react-router-dom';
import AppLogo from '../../icons/AppLogo'; 
import AppName from '../../icons/AppName';

function OnBorading() {
  const [isWaveVisible, setIsWaveVisible] = useState(true);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState('');

  const fullText = "Özündeki Güçlü Kadını Keşfetmek İsteyen Annelere";

  var duration = 2002;

  useEffect(() => {
    const loopNum = fullText.length;
    const intervalTime = duration / loopNum;

    const writeText = async () => {
      let tempText = ''; // Temporary string to store the characters
      for (let i = 0; i < loopNum; i++) {
        tempText += fullText[i];
        setDisplayedText(tempText);
        await new Promise((resolve) => setTimeout(resolve, intervalTime));
      }
    };

    writeText();
  }, [fullText, duration]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsWaveVisible(false);
      setTimeout(() => setIsButtonVisible(true), 500); // Show the button after the wave disappears
    }, duration); // 3 seconds

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  return (
    <div className='container'>
      <div className='brand'>
        <div className="logo">
          <AppLogo/>
        </div>
        {/* <div className='brand-name'>
          <h2 className='wo'>Wo</h2>
          <h2 className='mom'>MoM</h2>
        </div> */}
        <AppName/>
        <h4 className="tag-start">
          {displayedText}
        </h4>
      </div>
      <div className='wave-container'>
        <div className={`policy-btn ${isButtonVisible ? 'show' : ''}`}>
          <Link to={"/promo-video"}>
            <button className={`start-btn ${isButtonVisible ? 'show' : ''}`} disabled={!isButtonVisible}>
              Başlayalım
            </button>
          </Link>
          <p className={`policy ${isButtonVisible ? 'show' : ''}`}>WoMOM uygulamasının telif hakları Akdeniz Üniversitesi'ne
            aittir. Bu proje, TÜSEB tarafından desteklenmektedir.</p>
        </div> 
      </div>
    </div>
  );
}

export default OnBorading;
