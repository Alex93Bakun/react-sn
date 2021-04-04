import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/images/logo.png";

import s from "./Header.module.scss";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src={logo} alt="logo" />
      <div className={s.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
