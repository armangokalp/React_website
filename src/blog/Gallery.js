import React, { useState,useEffect } from 'react';

const Gallery = ({ galleryData, seconds }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % galleryData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + galleryData.length) % galleryData.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, seconds * 1000); // Call handleNext every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []); 

  return (
    <div className="gallery-container">
      {galleryData.map((data, index) => (
        <div
          key={index}
          className={`gallery-item ${index === activeIndex ? 'active' : ''}`}
        >
          <div className="gallery-text">
            <h1>{data.title}</h1>
            <p>{data.explanation}</p>
          </div>
          <div className='gallery-link'>
            <a href= {data.link}>{"Sayfaya gitmek için tıklayın"}</a>
          </div>
          <div className="gallery-image">
            <img src={data.imageSrc} alt={data.title} />
          </div>

        </div>
        
      ))}
      <button className="nav-button left" onClick={handlePrev}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="nav-button right" onClick={handleNext}>
            <i className="fas fa-chevron-right"></i>
          </button>
    </div>
  );
};

export default Gallery;
