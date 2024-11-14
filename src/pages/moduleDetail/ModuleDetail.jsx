import React, { useEffect, useState } from 'react'
import "./ModuleDetailStyle.css"
import { useParams } from 'react-router-dom';
import PageHead from '../../components/pageHead/PageHead';
import { getModuleDetail } from '../../utils/GetData';
import ContentModule from '../../contentModule/ContentModule'; 
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  
import './ModuleDetailStyle.css';
import AlertPopup from '../../components/alertPopup/AlertPopup';


function ModuleDetail() {
    const [moduleDetail, setModuleDetail] = useState(null)
    const { id } = useParams();

    useEffect(() => {
        toast.success("Module details loaded successfully!"); 
        fnGetData() 
    }, [id]);

    const fnGetData = async () => {
        const detail = await getModuleDetail(id);
        detail !== undefined && setModuleDetail(detail); 
        // console.log(detail)
    };

    return (
        <div className='deatil-container'>
            <PageHead lastPath={"/modules"} pageName={moduleDetail?.tag} />
            <div className="child-detail-container">
                {moduleDetail?.modules?.map(x => <ContentModule module={x} index={moduleDetail?.modules?.indexOf(x)+1} moduleId={id}  />)}
            </div>
        </div>
    )
}

export default ModuleDetail