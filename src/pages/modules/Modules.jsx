import React, { useState, useEffect } from 'react';
import "./ModulesStyle.css";
import PageHead from '../../components/pageHead/PageHead';
import Module from '../../components/module/Module';
import { getLocalStorage } from '../../utils/LocalStrManager';
import { getModuleData } from '../../utils/GetData';
import axios from "axios"
import QuoteOfDay from '../../components/quoteOfDay/QuoteOfDay';
import Navbar from '../../components/navbar/Navbar';


function Modules() {
  const [userName, setUserName] = useState('');
  const [modules, setModules] = useState(null);

  useEffect(() => {
    const storedData = getLocalStorage('formData');
    if (storedData) {
      setUserName(`${storedData.firstName} ${storedData.lastName}`);
    }
    if (modules == null) {
      fnGetData()
    }
  }, []);

  const fnGetData = async () => {
    const modulesResponse = await getModuleData();
    setModules(modulesResponse.modules);
    // console.log(modulesResponse)
  };

  return (
    <div className='modules-container'>
      <PageHead lastPath={""} pageName={"Modüller"} />
      <QuoteOfDay/>
      <div className='child-container'>
        {/* <div className='referance'>
          <h2 className="welcome">Hoş Geldiniz</h2>
          <p className="user-name">{userName}</p>
        </div> */}
        <div className="modules" >
          {modules != null && modules?.map(x => <Module data={x} />)}
        </div>
      </div>
      <Navbar/>
    </div>
  );
}

export default Modules;
