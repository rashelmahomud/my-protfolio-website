import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProtfolioDetails = () => {
    const { detailsId } = useParams();
    const [service, setService] = useState([]);
    useEffect( () => {
        fetch("/details.json")
        .then(res => res.json())
        .then(data => setService(data) )
    } ,[])
 
  const newService = service.filter(s => s._id == detailsId)
//   console.log(newService[0]);
    return (
        <div>
            <h1 className='text-2xl'>Service Details {detailsId}</h1>
            <h1>name {newService[0]?.name}</h1>
            <img src={newService[0]?.img}></img>
        </div>
    );
};

export default ProtfolioDetails;