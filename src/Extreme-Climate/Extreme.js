import React, { useState } from "react";
import "./Extreme.css"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../blog/Header';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from '../blog/Footer';
import customTheme from '../customTheme'

import extreme2 from '../Images/extreme2.jpeg';
import extremeImage from '../Images/extreme.jpg';
//import extreme2 from '../Images/extreme2.jpg';
import image5 from '../Images/image5.jpg';
const defaultTheme = createTheme();


const sections = [
    { title: 'Extreme Climate Events', url: '/Extreme' },
    { title: 'Food Insecurity', url: '/Food' },
    { title: 'Water Insecurity', url: '/Water' },
    { title: 'Economic Insecurity', url: '#' },
    { title: 'Climate Induced Migration', url: '/Migration' },
    { title: 'Armed Conflict', url: '/Conflict' },
  ];
const Extreme = () =>{

    const [openImage, setOpenImage] = useState(null);

    const handleImageClick = (image) => {
        setOpenImage(image);
    };

    const handleCloseModal = () => {
        setOpenImage(null);
    };
    
    return(
        <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <div>
        <Header title="Climate Security and Risks" sections={sections} />

        <main>
            <div className="main-div">
                <div className="extreme-header-div">
                    <div className="extreme-h-div">
                        <h1 className="extreme-header-text">
                        Extreme Climate Events: Understanding the Risks
                        </h1>
                    </div>
                </div>
                <div className="extreme-divider"/>
                <div className="extreme-general-div">
                    <h1 className="extreme-explain-h1">
                    What Are Extreme Climate Events?
                    </h1>
                    <p className="extreme-explain-p">
                    İklim değişikliği, aşırı sıcaklıklar ve aşırı yağışlar gibi hava olaylarını oluşturarak kuraklık, yangın, sel ve benzeri afetlerin sıklık, yoğunluk ve şiddetinin arttırmasına neden olur. Tüm bunlar bireyler, devletler ve gezegenin kendisi için doğrudan tehlikeler ve riskler oluşturur.
                    </p>
                    <img className="extreme-explain-img" src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Black_question_mark.png"/>
                </div>
                <div className="extreme-divider-thin"/>
                <div className="extreme-impacts-div">
                    <h1 className="extreme-impacts-h1">
                    Types of Extreme Climate Events
                    </h1>
                    <p className="extreme-impacts-p">
                    Sıcak hava dalgaları, aşırı yağışlar ve dolu yağışı, seller, orman yangınları, kuraklık, kasırgalar, hortumlar, siklonlar, toprak kaymaları, çölleşme.
                    </p>
                    <div className="extreme-photo-div">
                        <img
                            className="extreme-impacts-img-1"
                            src={image5}
                            alt="Description"
                            onClick={() => handleImageClick(image5)}
                        />
                        <img
                            className="extreme-impacts-img-1"
                            src={extreme2}
                            alt="Description"
                            onClick={() => handleImageClick(extreme2)}
                        />
                        <img
                            className="extreme-impacts-img-1"
                            src={extremeImage}
                            alt="Description"
                            onClick={() => handleImageClick(extremeImage)}
                        />
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <div className="extreme-divider"/>

                <div className="extreme-general-div">
                    <h1 className="extreme-explain-h1">
                    Impacts
                    </h1>
                    <p className="extreme-explain-p-larger">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="extreme-divider-thin"/>

                <div className="extreme-impacts-div">
                    <h1 className="extreme-impacts-h1">
                    Real-world examples
                    </h1>
                    <p className="extreme-impacts-p">e
                    Ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip x ea commodo con. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                </div>
                <div className="extreme-divider"/>

                <div className="extreme-general-div">
                    <h1 className="extreme-explain-h1">
                    Mitigation and Adaptation Strategies
                    </h1>
                    <p className="extreme-explain-p-larger">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="extreme-divider-thin"/>


                <div className="extreme-impacts-div">
                    <h1 className="extreme-impacts-h1">
                    Preparedness and Resilience
                    </h1>
                    <p className="extreme-impacts-p">e
                    Ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip x ea commodo con. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                </div>
                <div className="extreme-divider"/>
                

            </div>
            </main>
            </div>
            {openImage && (
                <div className="modal" onClick={handleCloseModal}>
                    <img className="modal-content" src={openImage} alt="Enlarged view" />
                </div>
            )}
        <Footer
        title="Climate Security and Risks"
        description="Arman Gökalp - Ali Vehbi Güneysu"
        />
    </ThemeProvider>
    )
}

export default Extreme;