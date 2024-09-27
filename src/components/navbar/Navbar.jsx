import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavbarStyle.css';
import HomeIcon from '../../icons/HomeIcon';
import ProfileIcon from '../../icons/ProfileIcon';
import HealthReportIcon from '../../icons/HealthIcon';
import TeamIcon from '../../icons/TeamIcon';

function Navbar() {
  const location = useLocation();  

  return (
    <div className='nav-container'>
      <div className="nav-child-container">
        <Link to={'/modules'}>
          <HomeIcon isClick={(location.pathname === '/' || location.pathname === '/modules')} />
        </Link>
        <Link to={'/health-report'}>
          <HealthReportIcon isClick={location.pathname === '/health-report'} />
        </Link>
        <Link to={'/profile'}>
          <ProfileIcon isClick={location.pathname === '/profile'} />
        </Link>
        <Link to={'/team'}>
          <TeamIcon isClick={location.pathname === '/team'} />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
