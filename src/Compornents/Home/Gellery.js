import React from 'react';
import img from '../../assacrt/image/mylogo.png'
const Gellery = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={img} class="max-w-sm rounded-lg shadow" />
                <div>
                    <h1 class="text-5xl font-bold">Mern Stack Developer!</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Gellery;