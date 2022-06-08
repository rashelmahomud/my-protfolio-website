import React from 'react';
import Protfolio from '../Protfolio/Protfolio';
import Contact from './Contact';
import Gellery from './Gellery';

const Home = () => {
    return (
        <div>
            <Gellery></Gellery>
            <Protfolio></Protfolio>
            <Contact></Contact>
        </div>
    );
};

export default Home;