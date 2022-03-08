import React from 'react';
import appStyles from './App.module.css';

import Navbar from './components/Navbar';

const App = () => {
    return (
        <div className={appStyles.appContainer}>
            <Navbar />
        </div>
    );
}

export default App;