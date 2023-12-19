import React from "react";
import Blog from './blog/Blog';
import Extreme from "./Extreme-Climate/Extreme";
import Food from "./Food-Security/Food";
import Water from "./Water-Security/Water";
import Economic from "./Economic-Insecurity/Economic";
import Migration from "./Climate-Induced-Migration/Migration";
import Conflict from "./Armed-Conflict/Conflict";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

const Routers = () => {
    return (
        <Router>
            <Routes>
                <Route path="/">
                    <Route path="/" element={<Blog />} />
                    <Route path="/Extreme" element={<Extreme/>} />
                    <Route path="/Food" element={<Food/>} />
                    <Route path="/Water" element={<Water/>} />
                    <Route path="/Economic" element={<Economic/>} />
                    <Route path="/Migration" element={<Migration/>} />
                    <Route path="/Conflict" element={<Conflict/>} />
                </Route>
            </Routes>
        </Router>
    )
}

export default Routers;
