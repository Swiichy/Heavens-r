import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../img/logo.png";

const Navigation = () => {
    return (
        <div className="navigation">
            <ul className="navigation__left">
                <NavLink to="/">
                    <li className="nav__item">guilde</li>
                </NavLink>
                <li className="nav__line"></li>
                <NavLink to="/outils">
                    <li className="nav__item">outils</li>
                </NavLink>
            </ul>
            <div className="nav__logo">
                <NavLink to="/">
                    <li className="nav__logo"><img src={logo} /></li>
                </NavLink>
            </div>
            <ul className="navigation__right">
                <li className="nav__item nav__expect">
                    <a href="https://discord.gg/yhySqHKA">discord</a>
                </li>
                <li className="nav__line"></li>
                <NavLink to="/connection">
                    <li className="nav__item">connection</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;