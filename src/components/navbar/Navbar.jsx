import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavbarStyle.css';
import HomeIcon from '../../icons/HomeIcon';
import ProfileIcon from '../../icons/ProfileIcon';
import HealthReportIcon from '../../icons/HealthIcon';

function Navbar() {
  const location = useLocation();  

  return (
    <div className='nav-container'>
      <div className="nav-child-container">
        <Link to={'/health-report'}>
          <HealthReportIcon isClick={location.pathname === '/health-report'} />
        </Link>
        <Link to={'/modules'}>
          <HomeIcon isClick={(location.pathname === '/' || location.pathname === '/modules')} />
        </Link>
        <Link to={'/profile'}>
          <ProfileIcon isClick={location.pathname === '/profile'} />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
