import React from "react";
import Header from '../blog/Header';
import Footer from '../blog/Footer';
import "./Conflict.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import customTheme from '../customTheme';

const sections = [
    { title: 'Extreme Climate Events', url: '/Extreme' },
    { title: 'Food Insecurity', url: '/Food' },
    { title: 'Water Insecurity', url: '/Water' },
    { title: 'Economic Insecurity', url: '/Economic' },
    { title: 'Climate Induced Migration', url: '/Migration' },
    { title: 'Armed Conflict', url: '/Conflict' },
];

const Conflict = () => {
    return (
        <ThemeProvider theme={customTheme}>
            <Header title="Climate Security and Risks" sections={sections} />
            <main>

                <div className="armed-intro-section">
                    <h1 className="section-title">
                        Armed Conflict Over Depleting Resources
                    </h1>
                </div>
                <div className="migration-divider"/>

                {/* Causes Section */}
                <div className="armed-causes-section">
                    <h2>Causes of Armed Conflicts</h2>
                    <p>
                        The causes of armed conflicts related to climate change...
                    </p>
                </div>

                {/* Effects Section */}
                <div className="armed-effects-section">
                    <h2>Effects on Populations and Environment</h2>
                    <p>
                        Armed conflicts influenced by climate change lead to humanitarian crises...
                    </p>
                    <img src="../Images/image1.jpg" alt="Effects of Conflict" />
                </div>

                {/* Statistics and Maps */}
                <div className="armed-stats-section">
                    <h2>Global Statistics and Maps</h2>
                    <p>
                        Interactive maps and statistical data highlight regions...
                    </p>
                    <img src="../Images/image1.jpg" alt="Statistics and Maps" />
                </div>

                {/* Real-life Stories or Case Studies */}
                <div className="armed-stories-section">
                    <h2>Case Studies and Real-life Stories</h2>
                    <p>
                        Personal stories and case studies illustrate the human impact...
                    </p>
                    <img src="../Images/image1.jpg" alt="Case Studies" />
                </div>

                {/* Any additional interactive elements or sections */}
                {/* ... */}

            </main>
            <Footer title="Climate Security and Risks" description="Arman Gökalp - Ali Vehbi Güneysu" />
        </ThemeProvider>
    );
};

export default Conflict;


