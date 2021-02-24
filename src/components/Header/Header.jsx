import React from 'react';

import logo from "../../assets/logo.png";

import s from './Header.module.scss'

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src={logo}
                alt="logo"/>
        </header>
    );
};

export default Header;
