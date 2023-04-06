import React from 'react';
import Projetces from '../Protfolio/Projetces';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Gellery from './Gellery';

const Home = () => {
    return (
        <div>
            <Gellery></Gellery>
            <Projetces></Projetces>
            <AboutUs></AboutUs>
            <Contact></Contact>
           
        </div>
    );
};

export default Home;