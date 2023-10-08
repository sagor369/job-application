import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='grid bg-green-200 grid-cols-2 md:grid-cols-3 items-center text-center py-4'>
            <div className=' ml-3  '>
                <h1 className='text-animation'>Life Career</h1>
            </div>
            <nav className='font-bold text-neutral-700'>
                <NavLink className='ml-6 hover:border p-2 , {({isActive}) => isActice ? "active" : ""}' 
                to='/'>Home</NavLink>
                <NavLink className='ml-6 hover:border p-2 , {({isActive}) => isActice ? "active" : ""}' 
                to='/rechart'>Statistics</NavLink>
                <NavLink className='ml-6 hover:border p-2 , {({isActive}) => isActice ? "active" : ""}' 
                to='/apply'>Applied Jods</NavLink>
                <NavLink className='ml-6 hover:border p-2 , {({isActive}) => isActice ? "active" : ""}' 
                to='/blog'>Blog</NavLink>
            </nav>
            <div>
                <a className='btn-primary' href="/#job" >Start Applying</a>
                <a ></a>
            </div>
        </div>
    );
};

export default Header;