import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='text-center'>
                <ul className="steps text-center">
                    <li className="step step-primary">CALL</li>
                    <li className="step step-primary">EMAIL</li>
                    <li className="step">PHONE</li>
                    <li className="step">HIRE</li>
                </ul>
            </div>
            <footer className="footer p-10 pragraph-color p-20">
                <div className='text-xl'>
                    <span className="footer-title">CALL</span>
                    <a className="link link-hover">+880 183519-9061</a>

                </div>
                <div className='text-xl'>
                    <span className="footer-title">EMAIL</span>

                    <a className="link link-hover">rashelmahmudraj1998@gmail.com</a>

                </div>
                <div>
                    <span className="footer-title text-xl">Social</span>
                    <div className="grid grid-flow-col gap-4 text-xl">
                        <a href='https://github.com/rashelmahomud' target="_blank"><i className="fa-brands fa-github"></i></a>
                        <a href='https://www.linkedin.com/in/rashelmahomud/' target="_blank"> <i className="fa-brands fa-linkedin"></i></a>
                        <a href='https://www.instagram.com/rashel_mahomud/' target="_blank"><i className="fa-brands fa-instagram"></i></a>
                        <a href='https://web.facebook.com/rashelmahomud.raj' target="_blank"> <i className="fa-brands fa-facebook"></i></a>

                    </div>
                </div>



            </footer>
            <h1 className='pragraph-color ml-20 text-xl pb-5 px-20'>© 2021 Rashel Mahomud</h1>

        </div>
    );
};

export default Footer;