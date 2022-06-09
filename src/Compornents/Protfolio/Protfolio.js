import React from 'react';
import img1 from '../../assacrt/image/project-1.jpg';
import img2 from '../../assacrt/image/project-2.jpg';
import img3 from '../../assacrt/image/project-3.jpg';
import './Protfolio.css';

const Protfolio = () => {
    return (
        <div>

            <div className='text-center my-10'>
                <h1 className='text-6xl font-bold text-primary'>Protfolio</h1>
                <h1 className='text-2xl font-bold text-secondary'>Latest Projects</h1>
                <progress className="progress w-56"></progress>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-5 lg:my-10 px-10'>
                <div className="card w-96 bg-base-100 shadow-xl justify-content-center">
                    <figure className="px-10 pt-10">
                        <img src={img1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Laptop Parts website!</h2>
                        <p>HTML, Tailwind CSS, JavaScript ES6,React.js, Node.js</p>
                        <div className="card-actions">
                            {/* <button className="btn btn-primary">Buy Now</button> */}
                            <a className='btn' target="_blank" href="https://laptop-pats.web.app/">Click For Live</a>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Carphone Warehouse website!</h2>
                        <p>HTML, Tailwind CSS, JavaScript ES6,React.js, Node.js</p>
                        <div className="card-actions">
                            <a className='btn' target="_blank" href="https://carphone-warehouse-d843f.web.app/">Click For Live</a>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">National Photography website!</h2>
                        <p>HTML, Bootstrap-5, JavaScript ES6,React.js</p>
                        <div className="card-actions">

                            <a className='btn' target="_blank" href="https://best-photography-19d6d.web.app/">Click For Live</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Protfolio;