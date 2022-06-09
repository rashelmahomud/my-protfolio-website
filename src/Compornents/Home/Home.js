import React from 'react';
import Protfolio from '../Protfolio/Protfolio';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Gellery from './Gellery';

const Home = () => {
    return (
        <div>
            <Gellery></Gellery>
            <Protfolio></Protfolio>
            <AboutUs></AboutUs>
            <Contact></Contact>
        </div>
    );
};

export default Home;