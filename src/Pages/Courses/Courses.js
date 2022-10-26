import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../Shared/CourseCard/CourseCard';

const Courses = () => {
    const courses = useLoaderData()
    return (
        <div className= 'grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3'>
            {
                courses.map(course => <CourseCard key={course.id} course={course}>
                    {course.name}
                </CourseCard>)
            }
           
        </div>
    );
};

export default Courses;