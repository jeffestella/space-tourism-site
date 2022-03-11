import React from "react";
import appStyles from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

import Navbar from "./components/Navbar";
// import SectionHero from "./components/SectionHero";

const App = () => {
    return (
        <BrowserRouter className={appStyles.appContainer}>
            {/* <div className={appStyles.appContainer}> */}
                <Navbar />
            {/* </div> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/destination" element={<Destination />} />
                <Route path="/crew" element={<Crew />} />
                <Route path="/technology" element={<Technology />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;