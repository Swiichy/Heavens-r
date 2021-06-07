import React from 'react';
import Header from './../../components/Header';
import ListDonjon from '../../components/donjon/ListDonjon';

const Donjons = () => {
    return (
        <div>
            <Header />
            <main className="donjon__main">
                <ListDonjon />
            </main>
        </div>
    );
};

export default Donjons;