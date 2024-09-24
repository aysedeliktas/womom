import React, { useEffect, useState } from 'react'
import "./DocumentPageStyle.css"
import PageHead from '../../components/pageHead/PageHead'
import { getDocumentDetail } from '../../utils/GetData';
import { useParams } from 'react-router-dom';

function DocumentPage() {
    const [details, setDetails] = useState(null)
    const [lastPath, setLastPath] = useState(null)
    const { id } = useParams();
    const { module } = useParams();


    useEffect(() => {
        fnGetData()
    }, []);

    const fnGetData = async () => {
        const detail = await getDocumentDetail(id);
        detail !== undefined && setDetails(detail);  
        // console.log(details)
    };


    return (
        <div className='document-page-container'>
            <PageHead lastPath={`/module/${module}`} pageName={details?.documentName} />
            <div className='text-container'>
                {details?.text?.map(x => <p className='document-paragraph'>{x}</p>)}
            </div>
        </div>
    )
}

export default DocumentPage