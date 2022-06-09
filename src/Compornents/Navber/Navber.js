import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
    return (
        <div class="navbar bg-gray-100 px-10">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/home">Home</Link></li>
                        <li><a target="_blank" href='https://web.facebook.com/messages/t/100015152085518/'>Hire Me </a></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-2xl font-bold">RashelMahomud</a>
            </div>
            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal p-0 font-bold">
                    <li><Link to="/home">Home</Link></li>
                    <li><a target="_blank" href='https://web.facebook.com/messages/t/100015152085518/'>Hire Me</a></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/about">About</Link></li>

                </ul>
            </div>

        </div>
    );
};

export default Navber;