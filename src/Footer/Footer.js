import React from 'react';
import "./Footer.css"; // You can create a separate CSS file for styling
import { sections } from '../sections';
const Footer = () => {
  // Split the sections array into two columns
  const middleIndex = Math.ceil(sections.length / 2);
  const firstColumn = sections.slice(0, middleIndex);
  const secondColumn = sections.slice(middleIndex);

  return (
    <div className='footer-container'>
          <a href='/' className='footer-title'>İklim Güvenliği ve Riskleri</a>
          <br/>
      <div className='footer-content'>
        <div className='footer-column'>
        <a href="/bizkimiz">Biz Kimiz?</a>

          {firstColumn.map((section) => (
            <a href={section.url} key={section.title}>
              {section.title}
            </a>
          ))}
        </div>
        <div className='footer-column'>
          {secondColumn.map((section) => (
            <a href={section.url} key={section.title}>
              {section.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
