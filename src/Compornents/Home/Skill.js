import React from 'react';

const Skill = () => {
    return (
        <div>
            <div>
                <h1 className='text-center my-20 font-bold text-primary text-3xl'>SKILLS</h1>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-20'>


                <div className="card w-96 bg-slate-600 shadow-xl">
                    <div className="card-body">
                        <div className='text-center'>
                            <div className="radial-progress font-bold border-primary text-white" style={{ "--value": 90 }}>90%</div>
                            <p className='font-bold mt-3 pragraph-color'>HTML & CSS</p>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-slate-700 shadow-xl">
                    <div className="card-body">
                        <div className='text-center'>
                            <div className="radial-progress font-bold border-primary text-white" style={{ "--value": 70 }}>70%</div>
                            <p className='font-bold mt-3 pragraph-color'>JavaScript</p>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-slate-800 shadow-xl">
                    <div className="card-body">
                        <div className='text-center'>
                            <div className="radial-progress font-bold border-primary text-white" style={{ "--value": 80 }}>80%</div>
                            <p className='font-bold mt-3 pragraph-color'>React.JS</p>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-slate-900 shadow-xl">
                    <div className="card-body">
                        <div className='text-center'>
                            <div className="radial-progress font-bold border-primary text-white" style={{ "--value": 70 }}>70%</div>
                            <p className='font-bold mt-3 pragraph-color'>Node.JS</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Skill;