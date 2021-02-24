import React from 'react';

import Header from "./assets/components/Header";
import Navbar from "./assets/components/Navbar";
import Profile from "./assets/components/Profile";

import './App.scss';

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );
}

export default App;
