import React from 'react'
import "./DocumentStyle.css"
import BookIcon from '../../../icons/BookIcon'
import { Link } from 'react-router-dom'

function Document({ data,moduleId }) { 
  
  return (
    <Link to={`/module/${moduleId}/${data.documentName}`} style={{ textDecoration: "none" }} className='document-container' >
      <span className="book-icon">
        <BookIcon />
      </span>
      <p className='document-tag' >{data.tag}</p>
    </Link>
  )
}

export default Document