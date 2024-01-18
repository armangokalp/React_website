import React from 'react';
import "./HeaderStyle.css"
import logo from '../Images/logo_v2.png'
import { sections } from '../sections';
const Header = ({ activeSection }) => {
  return (
    <div className='header-container'>
        <div className='header-upper-container'>
            <a href='/'><img src={logo} className='header-logo' alt="Logo"/></a>
            <h1 className='header-title'>İklim Güvenliği ve Riskleri</h1>
            <a href="/BizKimiz" className='header-who'>Biz Kimiz?</a>
        </div>
        <div className='header-down-container'>
          {sections.map((section, index) => (  
            <a href={section.url} className={`header-links ${index === activeSection ? 'active' : ''}`} key={section.title}>
              {section.title}
            </a>
          ))}
        </div>
    </div>
  );
};


export default Header;
