import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import logo from "../img/logo.png";

const Navigation = () => {
    return (
        <div className="navigation">
            <ul className="navigation__left">
                <NavLink to="/">
                    <li className="nav__item nav__icon nav__active nav__hover"
                        onMouseEnter={() => console.log('mouse entered')}
                        onMouseLeave={() => console.log('mouse left')}>
                        <span>guilde</span>
                        <FontAwesomeIcon icon={faCaretRight} />
                        <ul className="nav__active-active">
                            <NavLink to="/membres">
                                <li className="nav__item nav__active-active-item">Membres</li>
                            </NavLink>
                            <NavLink to="/donjons">
                                <li className="nav__item nav__active-active-item">Donjons</li>
                            </NavLink>
                        </ul>
                    </li>
                </NavLink>
                <li className="nav__line"></li>
                <NavLink to="/outils" activeClassName="nav-active">
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
                <NavLink to="/connection" activeClassName="nav-active">
                    <li className="nav__item">connection</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;