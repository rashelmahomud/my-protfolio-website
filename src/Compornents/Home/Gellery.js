import React from 'react';
import img from '../../assacrt/image/mylogo.png'
import './Gellery.css';
const Gellery = () => {

    return (
        <div className="hero min-h-screen">
            <div className="hero-content p-2 flex-col lg:flex-row-reverse">
                <div className='glarry-responsive-img'>
                <img src={img} className="lg:max-w-sm rounded-lg shadow image" data-aos="fade-left"
                    data-aos-duration="2000" />
                </div>
                <div data-aos="fade-up-right"
                    data-aos-duration="2000">
                    <h1 className="text-2xl pragraph-color font-bold" >Hi My Name is..</h1>
                    <h1 className="text-6xl font-bold text-secondary">Md.Rashel</h1>
                    <h1 className="text-5xl text-white font-bold">MERN Stack Developer!</h1>
                    <p className="py-6 pragraph-color text-xl">The curious, Mern stack developer can do any programming task in ON time handling the
                        difficulties and errors efficiently and dedicatedly finishing any work or problems..</p>
                    <a className="btn btn-primary" href='https://drive.google.com/file/d/1osqUZK8Bn4-QTzTIm4N06PIaezafUDf2/view?usp=sharing' target="_blank">Downloade Resume</a>
                    <a className="btn btn-primary mx-5" target="_blank" href='https://web.facebook.com/messages/t/100015152085518/'>Hire Me</a>

                    <div className='w-full'>
                        <div className='slidBar' id="div1">HTML</div>
                        <div className='slidBar' id="div2">CSS</div>
                        <div className='slidBar' id="div3">JavaScript</div>
                        <div className='slidBar' id="div4">React.JS</div>
                        <div className='slidBar' id="div5">Node.JS</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gellery;