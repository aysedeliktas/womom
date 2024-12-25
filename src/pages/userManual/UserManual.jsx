import React from 'react'
import "./UserManualStyle.css"
import PageHead from '../../components/pageHead/PageHead'

function UserManual() {
    return (
        <div className='user-manual-container'>
            <PageHead pageName={"Kılavuz"} lastPath={"/create-report"} />
            <div className="user-manual-child-container">
                <iframe
                    src={`${process.env.PUBLIC_URL}/TakipBeceriBilgilendirmeFormu.pdf`}
                    width="99%"
                    height="99%"
                    style={{ border: 'none' }}
                    title="PDF Viewer"
                />
            </div>
        </div>
    )
}

export default UserManual