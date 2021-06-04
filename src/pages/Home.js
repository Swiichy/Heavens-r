import React from 'react';
import Header from '../components/Header';
import background from '../img/bg_heavens.jpg';

const Home = () => {
    return (
        <div className="home">
            <Header/>
            <main className="home__main" style={{ backgroundImage: `url(${background})`}}>
                
            </main>
        </div>
    );
};

export default Home;