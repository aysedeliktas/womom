import React, { useEffect, useState } from 'react'
import "./HealthReportStyle.css"
import PageHead from '../../components/pageHead/PageHead'
import Navbar from '../../components/navbar/Navbar'
import ReportBar from '../../components/reportBar/ReportBar'
import { Link } from 'react-router-dom'
import { getAllHealthReports } from '../../utils/HealthReportHelper'

function HealthReport() {
    const [reports, setReports] = useState(null)

    useEffect(() => {
        setReports(getAllHealthReports());
        // console.log(reports); 
    }, []);


    return (
        <div className='health-report-container'>
            <PageHead lastPath={""} pageName={"Sağlık Karnesi"} />
            <div className="child-health-report"> 
                {reports?.map(x => <ReportBar data={x}/>)}
            </div>
            <Link className='report-record-btn' to={"/create-report"}>
                Kayıt Oluştur
            </Link>
            <Navbar />
        </div>
    )
}

export default HealthReport