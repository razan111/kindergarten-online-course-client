import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Cetagory = () => {
    const courses = useLoaderData();
    return (
        <div>
            <h2>this is cetagory: {courses.length}</h2>
        </div>
    );
};

export default Cetagory;