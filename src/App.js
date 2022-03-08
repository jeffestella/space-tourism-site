import React from 'react';
import appStyles from './App.module.css';

import Navbar from './components/Navbar';
import SectionHero from './components/SectionHero';

const App = () => {
    return (
        <div className={appStyles.appContainer}>
            <Navbar />
            <SectionHero />
        </div>
    );
}

export default App;