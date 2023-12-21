import React from "react";
import Header from '../blog/Header';
import Footer from '../blog/Footer';
import "./Conflict.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import customTheme from '../customTheme';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const conflictData = [
    { id: 1, lat: 48.3794, lng: 31.1656, title: "Ukraine Conflict", description: "Russo-Ukrainian War: A major conflict in Eastern Europe affecting the global geopolitical landscape." },
    { id: 2, lat: 34.8021, lng: 38.9968, title: "Conflict in Syria", description: "A multi-sided civil war with international involvement, leading to a major humanitarian crisis." },
    { id: 3, lat: 17.5707, lng: 3.9962, title: "Insurgency in the Maghreb", description: "Mali War: Armed conflicts in the Maghreb region, particularly affecting Mali with significant displacement of people." },
    { id: 4, lat: 23.6345, lng: 102.5528, title: "Mexican Drug War", description: "A conflict between government forces and various drug trafficking organizations, causing widespread violence." },
    { id: 5, lat: 9.145, lng: 40.4897, title: "Ethiopian Civil Conflict", description: "An ongoing conflict in Ethiopia with significant regional and ethnic implications." },
    { id: 6, lat: 12.8628, lng: 30.2176, title: "War in Sudan", description: "A series of conflicts in Sudan, including the Darfur genocide, leading to severe humanitarian issues." },
    { id: 7, lat: 4.5709, lng: 74.2973, title: "Colombian Conflict", description: "An armed conflict in Colombia, primarily involving government forces and guerrilla groups." },
    { id: 8, lat: 33.9391, lng: 67.7099, title: "Afghan Conflict", description: "Longstanding conflict in Afghanistan, involving various domestic and international actors." },
    { id: 9, lat: 5.1521, lng: 46.1996, title: "Somali Civil War", description: "Ongoing conflict in Somalia, involving government forces, regional players, and extremist groups." },
    { id: 10, lat: 4.0383, lng: 21.7587, title: "Conflict in the Congo", description: "Armed conflicts in the Democratic Republic of the Congo, particularly involving the Allied Democratic Forces." },
    { id: 11, lat: 9.082, lng: 8.6753, title: "Nigerian Conflicts", description: "Communal conflicts in Nigeria, often related to resources, religion, and ethnicity." },
    { id: 12, lat: 33.2232, lng: 43.6793, title: "Iraqi Conflict", description: "Ongoing conflict in Iraq, influenced by sectarian divisions and international interventions." },
    { id: 13, lat: 34.9526, lng: 72.3311, title: "Insurgency in Pakistan", description: "Insurgency in Khyber Pakhtunkhwa, Pakistan, involving various militant groups and government forces." }
];


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

                <div className="armed-causes-section">
                    <h3>Causes of Armed Conflicts</h3>
                    <p className="conflict-explain-p-larger">
                        Armed conflicts exacerbated by climate change are often rooted in complex factors that escalate tensions and lead to violence. One primary cause is resource scarcity, where competition for limited resources such as water, arable land, and energy sources intensifies. Additionally, extreme weather events and environmental degradation can disrupt livelihoods and displace communities, creating conditions conducive to conflict. Moreover, climate-induced migration, triggered by rising sea levels or deteriorating living conditions, can strain resources in host communities, sparking tensions. These underlying causes underscore the critical need for proactive strategies to address climate-related security challenges.                    
                    </p>
                </div>
                <div className="section-image0"> </div>

                <div className="armed-causes-section">
                    <h3>Effects on Populations and Environment</h3>
                    <p className="conflict-explain-p-larger">
                        Armed conflicts driven by the consequences of climate change have devastating effects on both populations and the environment. Humanitarian crises often emerge as communities are displaced from their homes due to resource scarcity, extreme weather events, and deteriorating living conditions. This displacement results in a strain on resources in host communities, exacerbating tensions. Moreover, the environmental impact of armed conflicts is profound, with widespread destruction of ecosystems, deforestation, and pollution. These conflicts disrupt delicate ecological balances and can have long-lasting consequences on the environment, compounding the challenges posed by climate change.                    
                    </p>
                </div>
                <div className="section-image"> </div>

                <div className="armed-causes-section">
                    <h3>Global Map of Ongoing Conflicts</h3>
                    <p className="conflict-explain-p-larger">
                        The map below illustrates ongoing conflicts around the world exacerbated by climate change.
                    </p>
                    <MapContainer center={[30, 30]} zoom={3} style={{ height: '500px', width: '100%' }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {conflictData.map(conflict => (
                            <Marker 
                                key={conflict.id} 
                                position={[conflict.lat, conflict.lng]} 
                                icon={DefaultIcon}
                            >
                                <Popup>
                                    <h3>{conflict.title}</h3>
                                    <p>{conflict.description}</p>
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>

            </main>
            <Footer title="Climate Security and Risks" description="Arman Gökalp - Ali Vehbi Güneysu" />
        </ThemeProvider>
    );
};

export default Conflict;


