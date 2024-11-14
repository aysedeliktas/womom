import React, { useEffect, useState } from 'react'
import "./DocumentPageStyle.css"
import PageHead from '../../components/pageHead/PageHead'
import { getDocumentDetail } from '../../utils/GetData';
import { useParams } from 'react-router-dom';

function DocumentPage() { 
    const { id } = useParams();
    const { module } = useParams();

    function splitAndRemovePdf(str) { 
        if (str.endsWith(".pdf")) {
            str = str.slice(0, -4);  
        } 
        const words = str.match(/[A-Z][a-z]*|[A-Z]+(?=[A-Z][a-z])/g); 
        return words ? words.join(' ') : '';  
    } 

    return (
        <div className='document-page-container'>
            <PageHead lastPath={`/module/${module}`} pageName={splitAndRemovePdf(id)} />
            <div className='text-container'>
                <iframe
                    src={`https://aysedeliktas.github.io/womom-data/documents/pdf/${id}`}
                    width="99%"
                    height="99%"
                    style={{ border: 'none' }}
                    title="PDF Viewer"
                />
            </div>
        </div>
    )
}

export default DocumentPage