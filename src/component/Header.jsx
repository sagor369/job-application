import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='grid bg-gray-100 grid-cols-2 md:grid-cols-3 items-center text-center py-14'>
            <div className='md:ml-6 ml-3  '>
                <h1 className='text-animation'>Life Career</h1>
            </div>
            <nav className='font-bold text-neutral-700'>
                <NavLink className='ml-6 hover:border p-2 , {({isActive}) => isActice ? "active" : ""}' 
                to='/'>Home</NavLink>
                <NavLink className='ml-6 hover:border p-2 , {({isActive}) => isActice ? "active" : ""}' 
                to='/'>Statistics</NavLink>
                <NavLink className='ml-6 hover:border p-2 , {({isActive}) => isActice ? "active" : ""}' 
                to='/'>Applied Jods</NavLink>
                <NavLink className='ml-6 hover:border p-2 , {({isActive}) => isActice ? "active" : ""}' 
                to='/'>Blog</NavLink>
            </nav>
            <div>
                <button className='btn-primary'>Start Applying</button>
            </div>
        </div>
    );
};

export default Header;