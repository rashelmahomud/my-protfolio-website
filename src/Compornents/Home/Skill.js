import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';

const Skill = () => {
    const [counter, setCounter] = useState(0);

    useEffect( () => {
        const interval = setInterval(() => {

            setCounter((counter) => counter + 1);

        }, 100000);

        return () => {
            clearInterval(interval);
        }
    } ,[])


    return (
        <div>
            <div>
                <h1 className='text-center my-20 font-bold text-primary text-3xl'>SKILLS</h1>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:px-20'>


                <div className="card w-96 bg-slate-600 shadow-xl">
                    <div className="card-body">
                        <div className='text-center'>
                            <div className="radial-progress font-bold border-primary text-white" style={{ "--value": 90 }}><CountUp start={0} end={90} duration={5} />%</div>
                            <p className='font-bold mt-3 pragraph-color'>HTML & CSS</p>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-slate-700 shadow-xl">
                    <div className="card-body">
                        <div className='text-center'>
                            <div className="radial-progress font-bold border-primary text-white" style={{ "--value": 70 }}><CountUp start={0} end={70} duration={5} />%</div>
                            <p className='font-bold mt-3 pragraph-color'>JavaScript</p>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-slate-800 shadow-xl">
                    <div className="card-body">
                        <div className='text-center'>
                            <div className="radial-progress font-bold border-primary text-white" style={{ "--value": 80 }}><CountUp start={0} end={80} duration={5} />%</div>
                            <p className='font-bold mt-3 pragraph-color'>React.JS</p>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-slate-900 shadow-xl">
                    <div className="card-body">
                        <div className='text-center'>
                            <div className="radial-progress font-bold border-primary text-white" style={{ "--value": 70 }}><CountUp start={0} end={70} duration={5} />%</div>
                            <p className='font-bold mt-3 pragraph-color'>Node.JS</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Skill;