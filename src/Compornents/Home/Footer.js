import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='text-center'>
                <ul class="steps text-center">
                    <li class="step step-primary">CALL</li>
                    <li class="step step-primary">EMAIL</li>
                    <li class="step">PHONE</li>
                    <li class="step">HIRE</li>
                </ul>
            </div>
            <footer class="footer p-10 pragraph-color p-20">
                <div className='text-xl'>
                    <span class="footer-title">CALL</span>
                    <a class="link link-hover">+880 183519-9061</a>

                </div>
                <div className='text-xl'>
                    <span class="footer-title">EMAIL</span>

                    <a class="link link-hover">rashelmahmudraj1998@gmail.com</a>

                </div>
                <div>
                    <span class="footer-title text-xl">Social</span>
                    <div class="grid grid-flow-col gap-4 text-xl">
                        <a href='https://github.com/rashelmahomud' target="_blank"><i class="fa-brands fa-github"></i></a>
                        <a href='https://www.linkedin.com/in/rashelmahomud/' target="_blank"> <i class="fa-brands fa-linkedin"></i></a>
                        <a href='https://www.instagram.com/rashel_mahomud/' target="_blank"><i class="fa-brands fa-instagram"></i></a>
                        <a href='https://web.facebook.com/rashelmahomud.raj' target="_blank"> <i class="fa-brands fa-facebook"></i></a>

                    </div>
                </div>



            </footer>
            <h1 className='pragraph-color ml-20 text-xl pb-5 px-20'>© 2021 Rashel Mahomud</h1>

        </div>
    );
};

export default Footer;