import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../Form/Form';

const CourseCard = ({ course }) => {
    return (

            <div className="card w-96 bg-gray-300 shadow-lg ">
           <img className='h-64 p-5' src={course.img} alt="Shoes" />
                <div className="card-body">
                    <h2 className="card-title">
                        {course.name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{
                        course.details.length> 180?
                        <p>{course.details.slice(0, 180)+ '...'} <Link>Read More</Link> </p> :
                        <p>{course.details}</p>
                        }</p>

                    <h4 className='text-2xl font-medium text-blue-600'>Price: {course.price}</h4>
                    <div className="card-actions justify-center">
                        <button className='bg-blue-400 py-3 px-4 text-xl rounded-xl text-white font-semibold hover:bg-blue-600'><Link to='/form'>Buy Now</Link></button>
                    </div>
                </div>
            </div>




    );
};

export default CourseCard;