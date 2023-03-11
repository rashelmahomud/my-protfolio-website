import gsap from 'gsap';
import React, { useLayoutEffect, useRef } from 'react';
import img from '../../assacrt/image/mylogo.png'
import hero1 from '../../assacrt/banner img/hero (1).png'
import hero2 from '../../assacrt/banner img/hero (2).png'
import hero3 from '../../assacrt/banner img/hero (3).png'
import './Gellery.css';
const Gellery = () => {

    const el = useRef();
    const tl = useRef();
    const tl2 = useRef();

    useLayoutEffect(() => {
        let cards = gsap.utils.toArray(".statCard");

        let ctx = gsap.context(() => {
            tl.current = gsap
                .timeline({ repeat: -1 })
                .to("#hero1", { opacity: 1, duration: 2 })
                .to("#hero1", { opacity: 0, display: "none", duration: 2, delay: 1 })
                .to("#hero2", { opacity: 1, duration: 2 })
                .to("#hero2", { opacity: 0, display: "none", duration: 2, delay: 1 })
                .to("#hero3", { opacity: 1, duration: 2 })
                .to("#hero3", { opacity: 0, display: "none", duration: 2, delay: 1 });

            tl2.current = gsap
                .timeline()
                .from("#hero-title", { delay: 0.2, y: 50, opacity: 0, duration: 0.3 })
                .from("#hero-subtitle", { y: 50, opacity: 0, duration: 0.3 })
                .from("#search-container", { y: 50, opacity: 0, duration: 0.3 })
                .from("#search-button", {
                    x: -100,
                    opacity: 0,
                    duration: 0.5,
                    ease: "power2",
                })
                .from(".badge-container", { opacity: 0 })
                .from(".badge", { opacity: 0, y: 50, stagger: 0.1 });
        }, el);

        const movement = (e) => {
            cards.forEach((card, index) => {
                const depth = 90;
                const moveX = (e.pageX - window.innerWidth / 2) / depth;
                const moveY = (e.pageY - window.innerHeight / 2) / depth;
                index++;
                gsap.to(card, {
                    x: moveX * index,
                    y: moveY * index,
                });
            });
        };

        document.addEventListener("mousemove", movement);

        return () => {
            ctx.revert();

            document.removeEventListener("mousemove", movement);
        };
    }, []);


    return (
        <div ref={el} className="hero min-h-screen">
            <div className="hero-content p-2 flex flex-col lg:flex-row flex-row-reverse">


                <div data-aos="fade-up-right"
                    data-aos-duration="2000">
                    <h1 className="text-2xl pragraph-color font-bold" >Hi My Name is..</h1>
                    <h1 className="text-6xl font-bold text-secondary">Md.Rashel</h1>
                    <h1 className="text-5xl text-white font-bold">MERN Stack Developer!</h1>

                    <p className="py-6 pragraph-color text-xl">The curious, Mern stack developer can do any
                        programming task <br />in ON  time handling the difficulties and errors<br />
                        efficiently and dedicatedly finishing any work or problems..</p>

                    <a className="btn btn-primary" href='https://drive.google.com/file/d/1SKh0j-Dr0jGXo0Rx47YgmR9wWoNOE1MZ/view?usp=sharing' target="_blank">Downloade Resume</a>
                    <a className="btn btn-primary mx-5" target="_blank" href='https://web.facebook.com/messages/t/100015152085518/'>Hire Me</a>

                    <div className='w-full'>
                        <div className='slidBar' id="div1">HTML</div>
                        <div className='slidBar' id="div2">CSS</div>
                        <div className='slidBar' id="div3">JavaScript</div>
                        <div className='slidBar' id="div4">React.JS</div>
                        <div className='slidBar' id="div5">Node.JS</div>
                    </div>
                </div>
                <div className='max-w-2xl h-[80vh] rounded-b-full  overflow-hidden z-0'>

                    {/* <div className='max-w-2xl h-[80vh] rounded-b-full absolute top-0 left-1/2 -translate-x-1/2 overflow-hidden z-0'> */}

                    <img
                        id='hero1'
                        src={hero1}
                        alt=''
                        className='object-cover h-full w-full opacity-0'
                    />
                    <img
                        id='hero2'
                        src={hero2}
                        alt=''
                        className='object-cover h-full w-full opacity-0'
                    />
                    <img
                        id='hero3'
                        src={hero3}
                        alt=''
                        className='object-cover h-full w-full opacity-0'
                    />
                </div>
            </div>
        </div>
    );
};

export default Gellery;