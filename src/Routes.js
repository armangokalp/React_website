import React from "react";
import Blog from './blog/Blog';
import Extreme from "./Extreme-Climate/Extreme"
import Food from "./Food-Security/Food"
import Migration from "./Climate-Induced-Migration/Migration"
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Water from "./Water-Security/Water";

const Routers = () => {
    return (
        <Router>
            <Routes>
                <Route path="/">
                    <Route path="/" element={<Blog />} />
                    <Route path="/Extreme" element={<Extreme/>} />
                    <Route path="/Food" element={<Food/>} />
                    <Route path="/Water" element={<Water/>} />
                    <Route path="/Migration" element={<Migration/>} />
                </Route>
            </Routes>
        </Router>
    )
}

export default Routers;
