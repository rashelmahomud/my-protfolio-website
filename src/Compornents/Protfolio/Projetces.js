import React, { useEffect, useState } from 'react';
import Protfolio from './Protfolio';

const Projetces = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("details.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (

        <div>
            <div className='text-center my-10'>
                <h1 className='text-6xl font-bold text-primary'>Protfolio</h1>
                <h1 className='text-2xl font-bold text-secondary'>Latest Projects</h1>
                <progress className="progress w-56"></progress>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-5 lg:my-10 px-10'>

                {
                    services.map(service => <Protfolio key={service._id} service={service}></Protfolio>)
                }

            </div>

        </div>

    );
};

export default Projetces;