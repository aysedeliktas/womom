import React from 'react'
import "./AlertPopupStyle.css"
import AlertIcon from '../../icons/AlertIcon'

function AlertPopup() {
  return (
    <div className='alert-container'>
        <AlertIcon/>
        <h3 className='warning'>Uyarı</h3>
        <p className="alert-message">Modüle başlamadan önce özdeğerlendirme anketini doldurmayı unutmayınız.</p>
        <button className='alert-btn'>Tamam</button>
    </div>
  )
}

export default AlertPopup