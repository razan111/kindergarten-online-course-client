import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {

    const [cetagories, setCetagories] = useState([])

    useEffect(() =>{
        fetch('https://kindergarten-server.vercel.app/course-catagories')
        .then(res => res.json())
        .then(data => setCetagories(data))
    }, [])


    return (
        <div>
            <h2 className='text-3xl font-semibold '>All Cetagory: {cetagories.length}</h2>

            <div>
                {
                    cetagories.map(cetagory => <p key={cetagory.id}>
                        <Link className='bg-blue-400 block my-3 px-3 py-4 text-white text-2xl rounded-lg hover:bg-blue-600 shadow shadow-lg' to={`/cetagory/${cetagory.id}`}>{cetagory.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;