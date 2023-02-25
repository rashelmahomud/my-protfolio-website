import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
    return (
        <div className="navbar px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact text-xl dropdown-content mt-3 p-2 shadow font-mono pragraph-color rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                        <li><Link to="/video">Video</Link></li>
                        <li><a target="_blank" href='https://web.facebook.com/messages/t/100015152085518/'>Hire Me </a></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
                <Link to='/' className='btn btn-ghost normal-case text-2xl pragraph-color font-mono font-bold'>
                    mdrashel
                </Link>

            </div>
            <div className="navbar-end hidden lg:flex text-xl">
                <ul className="menu menu-horizontal p-0 pragraph-color font-mono font-bold">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blogs">Blogs</Link></li>
                    <li><Link to="/video">Video</Link></li>
                    <li><a target="_blank" href='https://web.facebook.com/messages/t/100015152085518/'>Hire Me</a></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/about">About</Link></li>

                </ul>
            </div>

        </div>
    );
};

export default Navber;