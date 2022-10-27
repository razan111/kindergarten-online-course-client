import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../image/opps.png'
const NotFound = () => {
    return (
        <div style={{height: '100vh'}} className='flex justify-center bg-gray-300'>
            <div className='w-96'>
            <img src={img} alt="" />
            <h2>404- PAGE NOT FOUND</h2>
            <p>This page you are lokking for might have been removed had its name changed or is temporarily unavaviable.</p>
            <button><Link>Go to Homepage</Link></button>
            </div>
        </div>
    );
};

export default NotFound;