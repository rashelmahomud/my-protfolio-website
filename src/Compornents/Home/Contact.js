import React from 'react';

const Contact = () => {
    return (
        <div>
            <section className='my-25'>
                <div className='p-10'>
                    <div className='grid justify-items-center mb-5'>
                        <h4 className='text-secondary text-5xl font-bold'>Conect</h4>
                        <h4 className='text-xl font-bold pragraph-color'>Conect With Me</h4>

                    </div>

                    <form method="POST" action="https://formsubmit.co/rashelmahmudraj1998@gmail.com" enctype="multipart/form-data" className='grid justify-items-center'>
                        <input className='w-80 bg-slate-800 rounded-lg p-3' name='email' type="text" placeholder='Email Address' /> <br />
                        <input className='w-80 bg-slate-800 rounded-lg p-3' name='text' type="text" placeholder='subject' /> <br />
                        <textarea className='w-80 bg-slate-800 rounded-lg p-3' name="message" id="" cols="40" rows="8" placeholder='your massage'></textarea>
                        <button type="submit" className='btn btn-primary mt-5 text-white'>Send Massage</button>
                    </form>

                </div>
            </section>
        </div>
    );
};

export default Contact;