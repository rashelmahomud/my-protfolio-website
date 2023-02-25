import React from 'react';

const Videos = () => {
    return (
        <div className='lg:m-20 my-10'>
            <h1 className='text-4xl text-gray-500 text-center font-bold my-10'>My Own Videos Block</h1>
            <a target={'_blank'} href='https://www.youtube.com/watch?v=ODCfSRw1-u4&t=37s' className='text-white font-semibold text-xl mb-2 text-blue-500'> Click For All</a>
            <div className='flex justify-center mt-2'>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-10'>
                    <div>

                        <iframe className='hello-res' width="440" height="325" src="https://www.youtube.com/embed/apwS38vk5Ho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" data-aos="fade-up"
                            data-aos-duration="3000" allowfullscreen></iframe>
                    </div>
                    <div>

                        <iframe className='hello-res' width="440" height="325" src="https://www.youtube.com/embed/PmtHU8VKQ1A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div>

                        <iframe className='hello-res' width="440" height="325" src="https://www.youtube.com/embed/K5hfIhdGIkM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" data-aos="fade-down"
                            data-aos-duration="3000" allowfullscreen></iframe>

                    </div>
                    <div>

                        <iframe className='hello-res' width="440" height="325" src="https://www.youtube.com/embed/UJ0a8vBciqY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" data-aos="fade-up"
                            data-aos-duration="3000" allowfullscreen></iframe>

                    </div>
                    <div>

                        <iframe className='hello-res' width="440" height="325" src="https://www.youtube.com/embed/23CczihGNnQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" data-aos="fade-left"
                            data-aos-duration="3000" allowfullscreen></iframe>

                    </div>
                    <div>

                        <iframe className='hello-res' width="440" height="325" src="https://www.youtube.com/embed/SvnOmtAU0SE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" data-aos="fade-left"
                            data-aos-duration="3000" allowfullscreen></iframe>

                    </div>
                    <div>

                        <iframe className='hello-res' width="440" height="325" src="https://www.youtube.com/embed/IkXEO5-Nf8Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" data-aos="fade-down"
                            data-aos-duration="2000" allowfullscreen></iframe>

                    </div>
                    <div>

                        <iframe className='hello-res' width="440" height="325" src="https://www.youtube.com/embed/ODCfSRw1-u4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" data-aos="fade-right"
                            data-aos-duration="3000" allowfullscreen></iframe>

                    </div>
                    <div>

                        <iframe className='hello-res' width="440" height="325" src="https://www.youtube.com/embed/3OR8P1MyGNo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" data-aos="fade-up"
                            data-aos-duration="3000" allowfullscreen></iframe>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Videos;