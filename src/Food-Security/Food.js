import React from "react";
import "./Food.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../blog/Header';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from '../blog/Footer';
import image6 from '../Images/image6.jpg';
import image7 from '../Images/image7.jpg';
import image5 from '../Images/image5.jpg';

const defaultTheme = createTheme();

const sections = [
    { title: 'Extreme Climate Events', url: '/Extreme' },
    { title: 'Food Insecurity', url: '/Food' },
    { title: 'Water Insecurity', url: '#' },
    { title: 'Economic Insecurity', url: '#' },
    { title: 'Desertification', url: '#' },
    { title: 'Climate Induced Migration', url: '#' },
    { title: 'Armed Conflict', url: '#' },
];

const Food = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header title="Climate Security and Risks" sections={sections} />

                <main>
                    <div className="main-div">
                        <div className="header-div">
                            <div className="h-div">
                                <h1 className="header-text">
                                    Food Insecurity Amidst Climate Change
                                </h1>
                            </div>
                        </div>
                        <div className="divider" />
                        <div className="general-div">
                            <h1 className="explain-h1">
                                The Impact on Agriculture
                            </h1>
                            <p className="explain-p">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <img className="explain-img" src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Black_question_mark.png" alt="Explanation" />
                        </div>

                        <div className="impacts-div">
                            <h1 className="impacts-h1">
                                Crop Failures and Food Shortages
                            </h1>
                            <p className="impacts-p">
                                Ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip x ea commodo con. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            {/* <img className="impacts-img" src={image5} alt="Impact 1" />
                            <img className="impacts-img" src={image6} alt="Impact 2" />
                            <img className="impacts-img" src={image7} alt="Impact 3" /> */}
                        </div>
                        <div className="divider" />

                        <div className="general-div">
                            <h1 className="explain-h1">
                                Food Distribution Challenges
                            </h1>
                            <p className="explain-p-larger">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>

                        <div className="impacts-div">
                            <h1 className="impacts-h1">
                                Access to Nutritious Food
                            </h1>
                            <p className="impacts-p">
                                Ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip x ea commodo con. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className="divider" />

                        <div className="general-div">
                            <h1 className="explain-h1">
                                Sustainable Farming Practices
                            </h1>
                            <p className="explain-p-larger">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>

                        <div className="impacts-div">
                            <h1 className="impacts-h1">
                                Organic Farming and Urban Agriculture
                            </h1>
                            <p className="impacts-p">
                                Ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip x ea commodo con. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className="divider" />

                    </div>
                </main>
            </Container>
            <Footer
                title="Climate Security and Risks"
                description="Arman Gökalp - Ali Vehbi Güneysu"
            />
        </ThemeProvider>
    )
}

export default Food;
