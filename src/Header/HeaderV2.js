import React from 'react';
import "./HeaderStyle.css"
import logo from '../Images/logo_v2.png'
const Header = () => {
  
  return (
    <div className='header-container'>
        <div className='header-upper-container'>
            <img src={logo} className='header-logo'/>
            <h1 className='header-title'>İklim Güvenliği ve Riskleri</h1>
        </div>
        <div className='header-down-container'>
            <a className='header-links'>Yok artık</a>
            <a className='header-links'>Yok artık</a>
            <a className='header-links'>Yok artık</a>
        </div>
    </div>
  );
};

export default Header;
