import React, { useState,useEffect } from 'react';
import "./Who.css"
const PersonCard = ({ person }) => {

  return (
    <div className='who-person-card'>
        <div className='who-person-card-img-div'>
            <img className='who-person-card-img' src={person.image} />
        </div>
        <div className='who-person-card-text'>
                <h2>{person.name}</h2>
                <p>{person.explanation}</p>
            </div>
    </div>
  );
};

export default PersonCard;
