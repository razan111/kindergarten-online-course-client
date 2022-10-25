import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {

    const [cetagories, setCetagories] = useState([])

    useEffect(() =>{
        fetch('http://localhost:5000/course-catagories')
        .then(res => res.json())
        .then(data => setCetagories(data))
    }, [])


    return (
        <div>
            <h2>All Cetagory: {cetagories.length}</h2>

            <div>
                {
                    cetagories.map(cetagory => <p key={cetagory.id}>
                        <Link>{cetagory.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;