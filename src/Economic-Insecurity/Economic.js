import React from "react";
import "./Economic.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../blog/Header';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from '../blog/Footer';
import customTheme from '../customTheme'
import { sections } from '../sections';


const Economic = () => {
    return (
        <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <Header title="Climate Security and Risks" sections={sections} />

        <main>
                <div className="economic-header-div">
                        <h1 className="economic-header-text">
                            Economic Insecurity and Energy Challenges
                        </h1>
                </div>
                <div className="migration-divider"/>
        </main>

        <Footer title="Climate Security and Risks" description="Arman Gökalp - Ali Vehbi Güneysu" />
        </ThemeProvider>
    )
}

export default Economic;