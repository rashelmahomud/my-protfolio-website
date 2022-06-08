import React from 'react';
import img1 from '../../assacrt/image/project-1.jpg';
import img2 from '../../assacrt/image/project-2.jpg';
import img3 from '../../assacrt/image/project-3.jpg';

const Protfolio = () => {
    return (
        <div>

            <div className='text-center my-10'>
                <h1 className='text-6xl font-bold text-primary'>Protfolio</h1>
                <h1 className='text-2xl font-bold text-secondary'>Latest Projects</h1>
                <progress class="progress w-56"></progress>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-5 lg:my-10 px-10'>
                <div class="card w-96 bg-base-100 shadow-xl justify-content-center">
                    <figure class="px-10 pt-10">
                        <img src={img1} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Laptop Parts website!</h2>
                        <p>HTML, Tailwind CSS, JavaScript ES6,React.js, Node.js</p>
                        <div class="card-actions">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>

                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={img2} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Carphone Warehouse website!</h2>
                        <p>HTML, Tailwind CSS, JavaScript ES6,React.js, Node.js</p>
                        <div class="card-actions">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={img3} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">National Photography website!</h2>
                        <p>HTML, Bootstrap-5, JavaScript ES6,React.js</p>
                        <div class="card-actions">

                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Protfolio;