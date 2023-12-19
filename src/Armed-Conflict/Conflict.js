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
    { title: 'Economic Insecurity', url: '#' },
    { title: 'Climate Induced Migration', url: '/Migration' },
    { title: 'Armed Conflict', url: '/Conflict' },
];

const Conflict = () => {
    return (
        <ThemeProvider theme={customTheme}>
            <Header title="Climate Security and Risks" sections={sections} />
            <main>
                {/* Introduction Section */}
                <div className="armed-intro-section">
                    <h1>Armed Conflict and Climate Change</h1>
                    {/* Add content and visuals */}
                </div>

                {/* Causes Section */}
                <div className="armed-causes-section">
                    <h2>Causes of Armed Conflicts</h2>
                    {/* Add content and visuals */}
                </div>

                {/* Effects Section */}
                <div className="armed-effects-section">
                    <h2>Effects on Populations and Environment</h2>
                    {/* Add content and visuals */}
                </div>

                {/* Statistics and Maps */}
                <div className="armed-stats-section">
                    <h2>Global Statistics and Maps</h2>
                    {/* Interactive maps or charts */}
                </div>

                {/* Real-life Stories or Case Studies */}
                <div className="armed-stories-section">
                    <h2>Case Studies and Real-life Stories</h2>
                    {/* Add content and visuals */}
                </div>

                {/* Any additional interactive elements or sections */}
                {/* ... */}

            </main>
            <Footer title="Climate Security and Risks" description="Arman Gökalp - Ali Vehbi Güneysu" />
        </ThemeProvider>
    );
};

export default Conflict;
