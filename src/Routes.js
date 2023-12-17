import React from "react";
import Blog from './blog/Blog';
import Extreme from "./Extreme-Climate/Extreme"
import Food from "./Food-Security/Food"
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
                </Route>
            </Routes>
        </Router>
    )
}

export default Routers;
