import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../Shared/CourseCard/CourseCard';

const Cetagory = () => {
    const courses = useLoaderData();
    return (
        <div>
            <h2 className='text-3xl font-semibold mb-5 ml-5'>This is cetagory: {courses.length}</h2>
            
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 md:ml-5 sm:ml-0'>
            {
                courses.map(course => <CourseCard 
                    key={course._id}
                    course={course}
                ></CourseCard>)
            }
            </div>
        </div>
    );
};

export default Cetagory;