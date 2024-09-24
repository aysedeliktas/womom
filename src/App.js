import React, { useEffect, useState } from 'react';
import './App.css';
import OnBoarding from './pages/onBoarding/OnBoarding';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Modules from './pages/modules/Modules';
import Login from './pages/login/Login';
import TermsPolicy from './pages/termsPolicy/TermsPolicy';
import { getLocalStorage, setLocalStorage } from './utils/LocalStrManager'; // Import local storage utility functions
import ModuleDetail from './pages/moduleDetail/ModuleDetail';
import DocumentPage from './pages/documentPage/DocumentPage';
import HealthReport from './pages/healthReport/HealthReport';
import SetReport from './pages/setReport/SetReport';
import Profile from './pages/profile/Profile';
import Promo from './pages/promo/Promo';

function App() {
  const [isLoginBefore, setIsLoginBefore] = useState(false);

  const checkLoginStatus = () => {
    const formData = getLocalStorage('formData');

    if (formData && formData.isLoginBefore) {
      setIsLoginBefore(true);
    } else {
      if (!formData) {
        setLocalStorage('formData', { isLoginBefore: false });
      }
      setIsLoginBefore(false);
    }
  };

  useEffect(() => {
    checkLoginStatus();
    window.addEventListener('storage', checkLoginStatus);

    return () => {
      window.removeEventListener('storage', checkLoginStatus);
    };
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={isLoginBefore ? <Modules /> : <OnBoarding />}
          />
          <Route
            path='/boarding'
            element={isLoginBefore ? <Navigate to="/modules" /> : <OnBoarding />}
          />
          <Route
            path='/promo-video'
            element={isLoginBefore ? <Navigate to="/modules" /> : <Promo />}
          />
          <Route
            path='/login'
            element={isLoginBefore ? <Navigate to="/modules" /> : <Login onLoginSuccess={checkLoginStatus} />}
          />
          <Route
            path='/policy'
            element={isLoginBefore ? <Navigate to="/modules" /> : <TermsPolicy />}
          />
          <Route
            path='/modules'
            element={isLoginBefore ? <Modules /> : <Navigate to="/boarding" />}
          />
          <Route
            path='/module/:id'
            element={isLoginBefore ? <ModuleDetail /> : <Navigate to="/boarding" />}
          />
          <Route
            path='/module/:module/:id'
            element={isLoginBefore ? <DocumentPage /> : <Navigate to="/boarding" />}
          />
          <Route
            path='/health-report'
            element={isLoginBefore ? <HealthReport /> : <Navigate to="/boarding" />}
          />
          <Route
            path='/create-report'
            element={isLoginBefore ? <SetReport /> : <Navigate to="/boarding" />}
          />
          <Route
            path='/profile'
            element={isLoginBefore ? <Profile /> : <Navigate to="/boarding" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
