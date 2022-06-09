import React from 'react';

const Skill = () => {
    return (
        <div>
            <div>
                <h1 className='text-center my-20 font-bold text-primary text-3xl'>SKILLS</h1>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-20'>


                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <div className='text-center'>
                            <div class="radial-progress bg-white font-bold text-primary-content border-primary" style={{ "--value": 90 }}>90%</div>
                            <p className='font-bold mt-3'>HTML & CSS</p>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <div className='text-center'>
                            <div class="radial-progress bg-white font-bold text-primary-content border-primary" style={{ "--value": 70 }}>70%</div>
                            <p className='font-bold mt-3'>JavaScript</p>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <div className='text-center'>
                            <div class="radial-progress bg-white font-bold text-primary-content border-primary" style={{ "--value": 80 }}>80%</div>
                            <p className='font-bold mt-3'>React.JS</p>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <div className='text-center'>
                            <div class="radial-progress bg-white font-bold text-primary-content border-primary" style={{ "--value": 70 }}>70%</div>
                            <p className='font-bold mt-3'>Node.JS</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Skill;