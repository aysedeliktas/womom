import React from 'react'
import "./DocumentsModuleStyle.css"
import Document from './document/Document'
import { Link } from 'react-router-dom'

function DocumentsModule({ data,moduleId }) { 
  return (
      <div className='documents-module'>
        {data.documents.map(x => <Document data={x} moduleId={moduleId} />)}
      </div> 
  )
}

export default DocumentsModule