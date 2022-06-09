import React from 'react';

import './Protfolio.css';

const Protfolio = ({ service }) => {


    return (
        <div>
            <div >
                <div className="card w-96 bg-base-100 shadow-xl justify-content-center">
                    <figure className="px-10 pt-10">
                        <img src={service.img} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{service.name}</h2>
                        <p>{service.dec}</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Details</button>
                            <a className='btn' target="_blank" href="https://laptop-pats.web.app/">Click For Live</a>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Protfolio;