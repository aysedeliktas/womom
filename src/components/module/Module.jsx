import React from 'react'
import "./ModuleStyle.css"
import ProgressBar from '../progressBar/ProgressBar'
import {  useNavigate } from 'react-router-dom'

function Module({ data }) {
  const navigate = useNavigate();
  return (
    <div className='module-container' onClick={() => navigate(`/module/${data.id}`)}>
      <div className="content">
        <img className='content-image' src={data.image} style={{width:"100px"}} />
        <div className="content-texts">
          <p className="content-tag">{data.tag}</p>
          <p className="content-text">{data.text}</p>
        </div>
      </div>
      <div className="module-info">
        {/* <span className='progress-bar'>
          <ProgressBar value={data.progress} />
        </span> */}
        {/* <div className="last-use"><svg style={{ marginRight: "2px" }} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_65_2461)">
            <path d="M7.00008 12.8332C3.77833 12.8332 1.16675 10.2216 1.16675 6.99984C1.16675 3.77809 3.77833 1.1665 7.00008 1.1665C10.2218 1.1665 12.8334 3.77809 12.8334 6.99984C12.8334 10.2216 10.2218 12.8332 7.00008 12.8332ZM7.00008 11.6665C8.23776 11.6665 9.42474 11.1748 10.2999 10.2997C11.1751 9.4245 11.6667 8.23751 11.6667 6.99984C11.6667 5.76216 11.1751 4.57518 10.2999 3.70001C9.42474 2.82484 8.23776 2.33317 7.00008 2.33317C5.7624 2.33317 4.57542 2.82484 3.70025 3.70001C2.82508 4.57518 2.33341 5.76216 2.33341 6.99984C2.33341 8.23751 2.82508 9.4245 3.70025 10.2997C4.57542 11.1748 5.7624 11.6665 7.00008 11.6665ZM7.58341 6.99984H9.91675V8.1665H6.41675V4.08317H7.58341V6.99984Z" fill="#4E4B66" />
          </g>
          <defs>
            <clipPath id="clip0_65_2461">
              <rect width="14" height="14" fill="white" />
            </clipPath>
          </defs>
        </svg>
          {data.lastUse} gün önce</div> */}
      </div>
    </div>
  )
}

export default Module