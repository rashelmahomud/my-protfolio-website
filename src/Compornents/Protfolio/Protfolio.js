import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Protfolio.css';

const Protfolio = ({ service }) => {

    const navigate = useNavigate();
    const handelDetails = id => {
        navigate(`details/${id}`)
    }
    return (
        <div>
            <div >
                <div className="card w-96 shadow-2xl justify-content-center">
                    <figure className="px-10 pt-10">
                        <img src={service.img} alt="Shoes" className="rounded-xl" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title pragraph-color">{service.name}</h2>
                        <p className='pragraph-color'>{service.dec}</p>
                        <div className="card-actions" data-aos="zoom-in">
                            <button onClick={() => handelDetails(service._id)} className="btn btn-primary">PROJECT DETAILS</button>
                           
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Protfolio;