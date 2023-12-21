import React, { useState, useEffect } from 'react';
import './Water.css'; // You can create this file for your styles
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../blog/Header';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from '../blog/Footer';
import { sections } from '../sections';
const defaultTheme = createTheme();


const Water = () => {
  const [scrollingDown, setScrollingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user is scrolling down
      const isScrollingDown = window.scrollY > 800;

      // Update the state accordingly
      setScrollingDown(isScrollingDown);
    };

    // Add event listener for the scroll event
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once during component mount

  return (
    <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <div>
            <Header title="Climate Security and Risks" sections={sections} />

            <main>
                <div className="water-header-div">
                            <h1 className="water-header-text">
                            Su Güvenliği
                            </h1>
                </div>
                <div className='extreme-divider'/>
        
                <div className='water-general-div'>
                    <p className="water-explain-p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                
                <div className='extreme-general-div'>
                    <div className='glass-continue'/>
                    <div className={`app ${scrollingDown ? 'scrolling-down' : ''}`}>
                    </div>
                    <h1 className='glass-h1'>{scrollingDown ? 'Senin sayende artık dolu!' : 'Boş bir bardak'}</h1>
                    <p className='glass-p'>Okumaya devam ederek su kaynaklarını koru!</p>    
                </div>

                <div className='water-general-div'>
                    <p className="water-explain-p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className='extreme-general-div'>
                 <img className='water-centered-img' src = "https://i.natgeofe.com/n/fcc3a9af-2d50-4bbf-8925-72e047a874ed/desertification-01_2x1.jpg"/>
                </div>

                <div className='water-general-div'>
                    <p className="water-explain-p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <br/>
                <br/>
                <br/>
                <div className='extreme-divider'/>


            </main>
        </div>
        <Footer
        title="Climate Security and Risks"
        description="Arman Gökalp - Ali Vehbi Güneysu"
        />
    </ThemeProvider>
  );
};

export default Water;
