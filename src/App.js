import React, { useEffect, useState } from 'react';
import './App.css';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom'; // HashRouter'ı kullanıyoruz
import OnBoarding from './pages/onBoarding/OnBoarding';
import Modules from './pages/modules/Modules';
import Login from './pages/login/Login';
import TermsPolicy from './pages/termsPolicy/TermsPolicy';
import ModuleDetail from './pages/moduleDetail/ModuleDetail';
import DocumentPage from './pages/documentPage/DocumentPage';
import HealthReport from './pages/healthReport/HealthReport';
import SetReport from './pages/setReport/SetReport';
import Profile from './pages/profile/Profile';
import Promo from './pages/promo/Promo';
import { getLocalStorage, setLocalStorage } from './utils/LocalStrManager';
import Team from './pages/team/Team';
import UserManual from './pages/userManual/UserManual';

const PublicRoute = ({ isLoginBefore, children }) => {
  return !isLoginBefore ? children : <Navigate to="/modules" />; 
};
 
const ProtectedRoute = ({ isLoginBefore, children }) => {
  return isLoginBefore ? children : <p>Bu sayfaya erişmek için giriş yapmalısınız.</p>;  
};

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
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute isLoginBefore={isLoginBefore}>
                <OnBoarding />
              </PublicRoute>
            }
          />
          <Route
            path="/boarding"
            element={
              <PublicRoute isLoginBefore={isLoginBefore}>
                <OnBoarding />
              </PublicRoute>
            }
          />
          <Route
            path="/promo-video"
            element={
              <PublicRoute isLoginBefore={isLoginBefore}>
                <Promo />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute isLoginBefore={isLoginBefore}>
                <Login onLoginSuccess={checkLoginStatus} />
              </PublicRoute>
            }
          />
          <Route
            path="/policy"
            element={
              <PublicRoute isLoginBefore={isLoginBefore}>
                <TermsPolicy />
              </PublicRoute>
            }
          />
          <Route
            path="/modules"
            element={
              <ProtectedRoute isLoginBefore={isLoginBefore}>
                <Modules />
              </ProtectedRoute>
            }
          />
          <Route
            path="/module/:id"
            element={
              <ProtectedRoute isLoginBefore={isLoginBefore}>
                <ModuleDetail />
              </ProtectedRoute>
            }
          />
          <Route
            path="/module/:module/:id"
            element={
              <ProtectedRoute isLoginBefore={isLoginBefore}>
                <DocumentPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/health-report"
            element={
              <ProtectedRoute isLoginBefore={isLoginBefore}>
                <HealthReport />
              </ProtectedRoute>
            }
          />
          <Route
            path="/create-report"
            element={
              <ProtectedRoute isLoginBefore={isLoginBefore}>
                <SetReport />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute isLoginBefore={isLoginBefore}>
                <Profile />
              </ProtectedRoute>
            }
          />
           <Route
            path="/team"
            element={
              <ProtectedRoute isLoginBefore={isLoginBefore}>
                <Team />
              </ProtectedRoute>
            }
          />
           <Route
            path="/user-guide"
            element={
              <ProtectedRoute isLoginBefore={isLoginBefore}>
                <UserManual />
              </ProtectedRoute>
            }
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
