import React from "react";
import appStyles from "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import Navbar from "./components/Navbar";
import SectionHero from "./components/SectionHero";

const App = () => {
    return (
        <BrowserRouter className={appStyles.appContainer}>
            {/* <div className={appStyles.appContainer}> */}
                <Navbar />
            {/* </div> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="home" element={<div></div>} />
                <Route path="home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;