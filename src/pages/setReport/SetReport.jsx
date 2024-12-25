import React, { useState } from 'react';
import "./SetReportStyle.css";
import PageHead from '../../components/pageHead/PageHead';
import Navbar from '../../components/navbar/Navbar';
import { addHealthReport } from '../../utils/HealthReportHelper';
import { Link, useNavigate } from 'react-router-dom';

function SetReport() {
    // State variables for each input
    const [kg, setKg] = useState('');
    const [week, setWeek] = useState('');
    const [tension, setTension] = useState('');
    const [bigTension, setBigTension] = useState('');
    const [pulse, setPulse] = useState('');
    const [fundusHeight, setFundusHeight] = useState('');
    const navigate = useNavigate();

    const CreateRecord = () => {
        addHealthReport({
            kg: kg,
            week: week,
            tension: `${bigTension}/${tension}`,
            pulse: pulse,
            fundusHeight: fundusHeight,
            date: getCurrentDateFormatted()
        });
        navigate('/health-report');
    };

    const clearInputs = () => {
        setKg('');
        setWeek('');
        setTension('');
        setPulse('');
        setFundusHeight('');
    };

    // Function to format the current date as dd-mm-yyyy
    function getCurrentDateFormatted() {
        const date = new Date();
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    }

    // Check if all inputs are filled
    const isFormComplete = kg && week && tension && pulse && fundusHeight;
    const tensionStyle = { width: "95%", padding: 0 }

    return (
        <div className='set-record-container'>
            <PageHead lastPath={"/health-report"} pageName={"Kayıt Oluştur"} />
            <div className="set-record-child">
                <div className="inputs-area">
                    <div className="health-record-input-area">
                        <p className="record-input-tag">Kilogram</p>
                        <input
                            type='number'
                            className="health-record-input"
                            value={kg}
                            onChange={(e) => setKg(e.target.value)}
                        />
                    </div>
                    <div className="health-record-input-area">
                        <p className="record-input-tag">Gebelik Haftası</p>
                        <input
                            type='number'
                            className="health-record-input"
                            value={week}
                            onChange={(e) => setWeek(e.target.value)}
                        />
                    </div>
                    <div className="health-record-input-area" style={{ justifyContent: "start" }}>
                        <p className="record-input-tag">Büyük Tansiyon</p>
                        <input
                            type="number"
                            className="health-record-input"
                            value={bigTension}
                            onChange={(e) => setBigTension(e.target.value)}
                            
                        />
                    </div>
                    <div className="health-record-input-area">
                        <p className="record-input-tag" >Küçük Tansiyon</p>
                        <input
                            type="number"
                            className="health-record-input"
                            value={tension}
                            onChange={(e) => setTension(e.target.value)}
                          
                        />
                    </div>
                    <div className="health-record-input-area">
                        <p className="record-input-tag">Nabız</p>
                        <input
                            type='number'
                            className="health-record-input"
                            value={pulse}
                            onChange={(e) => setPulse(e.target.value)}
                        />
                    </div>
                    <div className="health-record-input-area">
                        <p className="record-input-tag">Fundus Yüksekliği (cm)</p>
                        <input
                            type='number'
                            className="health-record-input"
                            value={fundusHeight}
                            onChange={(e) => setFundusHeight(e.target.value)}
                        />
                    </div>
                </div>
                <Link
                    to={"/user-guide"}
                    className='health-record-btn'
                    style={{ backgroundColor:'#6B5EE6',
                        margin:"0",
                        textDecoration:"none"
                      }}
                >
                    Kullanıcı Kılavuzu
                </Link>
                <button
                    onClick={CreateRecord}
                    disabled={!isFormComplete}
                    className='health-record-btn'
                    style={{ backgroundColor: isFormComplete ? '#6B5EE6' : '#6c5ee66c'  }}
                >
                    Kaydet
                </button>
            </div>
            <Navbar />
        </div>
    );
}

export default SetReport;
