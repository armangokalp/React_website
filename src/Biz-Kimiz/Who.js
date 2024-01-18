import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Header from '../Header/Header';
import CssBaseline from '@mui/material/CssBaseline';
import customTheme from '../customTheme'

import './Who.css'
import Footer from '../Footer/Footer';
import { useScrollToTop } from '../blog/useScrollToTop';
import PersonCard from './PersonCard';
const defaultTheme = createTheme();
const persons = [
    { name: 'Başar Baysal', image: 'https://pbs.twimg.com/profile_images/1687854148966883328/yXb4UhhZ_400x400.jpg', explanation: "Sitenin Sahibi" },
    { name: 'Ali Vehbi Güneysu', image: 'https://alivehbiguneysu.net/static/media/myPhoto.aec4a690d0b700cc2821.jpg', explanation: "Geliştirici" },
    { name: 'Arman Gökalp', image: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg', explanation: "Geliştirici" },
    { name: 'Çağla', image: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg', explanation: "İçerik Sorumlusu" },
    { name: 'Sezen', image: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg', explanation: "İçerik Sorumlusu" },

]


const Who = () => {

    useScrollToTop();

    return (
        <ThemeProvider theme={customTheme}>
            <CssBaseline />
            <div className="main-padding">
            <Header/>                
                <main>
                    <div className='who-header'>
                        <h1>Biz Kimiz?</h1>
                        <p>İklim Güvenliği ve Riskleri websitesini</p>
                    </div>
                    <div className='who-main-div'>
                        <div className='who-divider'/>
                        <div className='who-persons-container'>
                            <PersonCard person={persons[0]}/>
                        </div>
                        <div className='who-persons-container'>
                        {persons.map((person, index) =>
                            index !== 0 ? (
                                <PersonCard key={index} person={person} />
                            ) : null
                        )}
                        </div>
                        
                        <div className='who-divider'/>
                    
                    </div>
                </main>
            <Footer/>
            </div>
        </ThemeProvider>
    );
};

export default Who;
