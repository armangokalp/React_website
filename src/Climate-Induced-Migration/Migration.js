import React from "react";
import "./Migration.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../blog/Header';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from '../blog/Footer';
import customTheme from '../customTheme'

import migrationImage from '../Images/migration.jpeg';
import Image4 from '../Images/image4.png';

const defaultTheme = createTheme();

const sections = [
    { title: 'Extreme Climate Events', url: '/Extreme' },
    { title: 'Food Insecurity', url: '/Food' },
    { title: 'Water Insecurity', url: '/Water' },
    { title: 'Economic Insecurity', url: '#' },
    { title: 'Climate Induced Migration', url: '/Climate' },
    { title: 'Armed Conflict', url: '#' },
];

const Migration = () => {
    return (
        <ThemeProvider theme={customTheme}>
            <CssBaseline />
            <Header title="Climate Security and Risks" sections={sections} />

            <main>
                <div className="migration-header-div">
                        <h1 className="migration-header-text">
                            Climate Induced Migration
                        </h1>
                </div>
                <div className="migration-divider"/>

                <div className="migration-text">
                    <h2>Problem Definition</h2>
                    <p>
                    Climate-induced migration, often referred to as climate migration or environmental migration, is a complex phenomenon driven by the impacts of climate change. It involves the displacement of individuals and communities from their homes and regions due to environmental changes and natural disasters caused or exacerbated by climate-related factors. This form of migration can take various forms, from internal displacement within a country to cross-border migration.
                    </p>
                    <p>
                    According to the Internal Displacement Monitoring Centre (IDMC), between 2008 and 2019, an estimated 22 million people were displaced annually by climate-related disasters.
The impacts of climate-induced migration are not limited to a single region. It occurs globally, affecting both developed and developing countries.
Small island nations and coastal regions are particularly vulnerable to sea-level rise and are at the forefront of climate-induced migration.
Climate-induced migration is expected to increase in the coming decades as climate change continues to alter environments and create new challenges for communities.
                    </p>
                </div>
                {/*
                <div className="migration-divider-thin"/>
                <div className="migration-subheading">
                    <h2>The Causes and Effects</h2>
                </div>
                <div className="migration-causes-effects">
                <div className="migration-causes">
                    <h3>Causes</h3>
                    <ul>
                        <li>
                        <strong>Environmental Degradation:</strong> Rising
                        temperatures, sea-level rise, and extreme weather events degrade
                        the environment, making areas uninhabitable.
                        </li>
                        <li>
                        <strong>Resource Scarcity:</strong> Droughts and desertification
                        lead to water and food scarcity, forcing communities to seek
                        better living conditions elsewhere.
                        </li>
                        <li>
                        <strong>Displacement by Natural Disasters:</strong> Cyclones,
                        floods, and wildfires displace populations, often permanently.
                        </li>
                    </ul>
                    </div>
                    <div className="migration-effects">
                    <h3>Effects</h3>
                    <ul>
                        <li>
                        <strong>Disruption of Livelihoods:</strong> Climate-induced
                        migration disrupts traditional livelihoods, leading to economic
                        challenges.
                        </li>
                        <li>
                        <strong>Increased Competition:</strong> Migration often leads
                        to competition for resources and jobs in receiving areas.
                        </li>
                        <li>
                        <strong>Loss of Cultural Heritage:</strong> Indigenous
                        communities may lose their cultural heritage as they are forced
                        to relocate.
                        </li>
                    </ul>
                    </div>
                </div>
                */}
                <div className="migration-divider"/>

                <div className="migration-content">
                    <div className="migration-text">
                        <h2>Real Stories of Migration</h2>
                        <p>While climate-induced migration is a global phenomenon, it's important to humanize the issue by sharing real stories of individuals and communities affected by it. These stories highlight the personal experiences, challenges, and resilience of climate migrants. Some real stories include:</p>
                    </div>
                    <div className="migration-image"></div>
                </div>
                <div className="migration-divider-thin"/>
                <div className="migration-real-stories">
                <div className="migration-text-center">
                <ul>
                    <li><strong>Pacific Island Nations:</strong> Residents of low-lying Pacific island nations like Tuvalu and Kiribati face the imminent threat of sea-level rise, leading to planned relocation to countries like New Zealand.</li>
                    <li><strong>African Sahel Region:</strong> Communities in the Sahel region of Africa are grappling with drought and desertification, pushing people to migrate in search of arable land and water sources.</li>
                    <li><strong>Bangladesh:</strong> Coastal areas of Bangladesh are prone to frequent flooding and cyclones, resulting in the displacement of millions of people who often move to urban centers.</li>
                    <li><strong>Indigenous Communities:</strong> Indigenous groups in North America, such as the Inuit in Canada, are experiencing the loss of traditional hunting grounds due to climate change, leading to migration challenges.</li>
                </ul>
                </div>
                </div>
                <div className="migration-divider"/>


                <div className="migration-text">
                    <h2>Migration Statistics</h2>
                    {/* Include charts or graphs here */}
                </div>
                <div className="migration-divider"/>

            </main>

            <Footer title="Climate Security and Risks" description="Arman Gökalp - Ali Vehbi Güneysu" />
        </ThemeProvider>
    );
};

export default Migration;
