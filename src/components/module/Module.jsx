import React from 'react'
import "./ModuleStyle.css"
import ProgressBar from '../progressBar/ProgressBar'
import {  useNavigate } from 'react-router-dom'

const isModuleActive = (data) => {
  if (!data?.activateDate) return false;
  const now = new Date();
  const activateDate = new Date(data.activateDate);
  return now >= activateDate;
};

function Module({ data }) {
  const navigate = useNavigate();
  return (
    <div 
      className={`module-container ${!isModuleActive(data) ? 'disabled' : ''}`} 
      onClick={() => isModuleActive(data) && navigate(`/module/${data.id}`)}
    >
      <div className="content">
        <img className='content-image' src={data.image} style={{width:"100px"}} />
        <div className="content-texts">
          <p className="content-tag">{data.tag}</p>
          <p className="content-text">{data.text}</p>
        </div>
      </div>
      <div className="module-info">
      </div>
    </div>
  )
}

export default Module