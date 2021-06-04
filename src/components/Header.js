import React from 'react';
import Navigation from './Navigation';

const Header = () => {
    return (
        <div className="header">
            <div className="header__line"></div>
            <Navigation />
        </div>
    );
};

export default Header;