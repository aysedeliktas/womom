import React from 'react'
import "./ReportBarStyle.css"
import { removeHealthReport } from '../../utils/HealthReportHelper' 
import GarbageIcon from '../../icons/GarbageIcon';

function ReportBar({ data }) { 

    const  deleteRecord = () => {
        removeHealthReport(data.id); 
        window.location.reload();
    }
    

    return (
        <div className='report-bar-container'>
            <div className="report-bar-tag">
                <p className='report-bar-date'>
                    {data.date}
                </p>
                <div className='garbage' onClick={deleteRecord}><GarbageIcon/></div>
                <div className='report-wave'></div>
            </div>
            <div className="report-bar-info">
                <span className="report-info">
                    <p className="report-info-tag">Kilo</p>
                    <p className="report-info-value">{data.kg}</p> 
                </span>
                <span className="report-info">
                    <p className="report-info-tag">Gebelik Haftası</p>
                    <p className="report-info-value">{data.week}</p> 
                </span>
                <span className="report-info">
                    <p className="report-info-tag">Tansiyon</p>
                    <p className="report-info-value">{data.tension}</p> 
                </span>
                <span className="report-info">
                    <p className="report-info-tag">Nabız</p>
                    <p className="report-info-value">{data.pulse}</p> 
                </span>
                <span className="report-info">
                    <p className="report-info-tag">Fundus Yüksekliği</p>
                    <p className="report-info-value">{data.fundusHeight}</p> 
                </span> 
            </div>
        </div>
    )
}

export default ReportBar