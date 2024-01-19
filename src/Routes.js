import React from "react";
import Blog from './blog/Blog';
import Extreme from "./Extreme-Climate/Extreme";
import Food from "./Food-Security/Food";
import Water from "./Water-Security/Water";
import Economic from "./Economic-Insecurity/Economic";
import Migration from "./Climate-Induced-Migration/Migration";
import Conflict from "./Armed-Conflict/Conflict";
import Article from "./Article/ArticlePage"
import Dillemas from "./Article/dillemas"
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Who from "./Biz-Kimiz/Who";

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
                    <Route path="/Article" element={<Article/>} />
                    <Route path="/Article/:id" element={<Article/>} />
                    <Route path="/BizKimiz" element={<Who/>} />
                    <Route path="/Dev" element={<Who/>} />
                    <Route path="/dillemas" element={<Dillemas/>} />

                </Route>
            </Routes>
        </Router>
    )
}

export default Routers;
