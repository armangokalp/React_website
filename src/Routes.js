import React from "react";
import Blog from './blog/Blog';

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
                </Route>
            </Routes>
        </Router>
    )
}

export default Routers;
