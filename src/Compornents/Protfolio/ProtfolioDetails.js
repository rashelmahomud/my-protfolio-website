import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProtfolioDetails = () => {
    const { detailsId } = useParams();
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch("/details.json")
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const newService = service.filter(s => s._id == detailsId)
    //   console.log(newService[0]);
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2'>

                <div className="card  bg-base-100 shadow-xl my-3 lg:m-20">
                    <figure><img src={newService[0]?.img} alt="Shoes" /></figure>
                </div>
                <div className="card  bg-base-100 shadow-xl my-3 lg:m-20 ">
                    <figure><img src={newService[0]?.img2} alt="Shoes" /></figure>
                </div>
                <div className="card bg-base-100 shadow-xl my-3 lg:m-20">
                    <figure><img src={newService[0]?.img3} alt="Shoes" /></figure>
                </div>

            </div>
            <div className='text-center'>
                <h1 className='text-4xl pragraph-color'>Website Name: <span className='text-4xl text-primary font-bold'>{newService[0]?.name}</span></h1>
                <p className='pragraph-color'> Technology used: {newService[0]?.dec}</p>

                <div>
                    <button className="btn btn-outline btn-info"><a href={newService[0]?.client}>CLIENT CODE</a></button>

                    <button className="btn btn-outline btn-info m-2"><a href={newService[0]?.server}>SARVER CODE</a></button>
                    <button className="btn btn-outline btn-info"><a target="_blank" href={newService[0]?.liveSite}>LIVE</a></button>
                </div>

                <h3 className='lg:w-3/5 p-5 lg:ml-60 my-10 pragraph-color'>{newService[0]?.details}</h3>


            </div>
        </div>
    );
};

export default ProtfolioDetails;