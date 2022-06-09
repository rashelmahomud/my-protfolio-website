import React from 'react';
import img from '../../assacrt/image/mylogo.png'
const Gellery = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={img} class="max-w-sm rounded-lg shadow" />
                <div>
                    <h1 class="text-2xl font-bold">Hi My Name is..</h1>
                    <h1 class="text-6xl font-bold text-secondary">Rashel Mahomud</h1>
                    <h1 class="text-5xl font-bold">Mern Stack Developer!</h1>
                    <p class="py-6">The curious, Mern stack developer can do any programming task in ON time handling the
                        difficulties and errors efficiently and dedicatedly finishing any work or problems..</p>
                    <a className="btn btn-primary" href='https://drive.google.com/file/d/1osqUZK8Bn4-QTzTIm4N06PIaezafUDf2/view?usp=sharing' target="_blank">Downloade Resume</a>
                    <a className="btn btn-primary mx-5" target="_blank" href='https://web.facebook.com/messages/t/100015152085518/'>Hire Me</a>
                </div>
            </div>
        </div>
    );
};

export default Gellery;