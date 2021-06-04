import React from 'react';
import Header from '../components/Header';
import background from '../img/bg_outils.jpg';

const Outils = () => {
    return (
        <div className="outils">
            <Header />
            <main className="outils__main" style={{ backgroundImage: `url(${background})`}}>

            </main>
        </div>
    );
};

export default Outils;