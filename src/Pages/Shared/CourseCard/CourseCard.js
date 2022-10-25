import React from 'react';

const CourseCard = ({ course }) => {
    return (

            <div className="card w-96 bg-base-100 shadow-lg ">
           <img className='h-72 p-5' src={course.img} alt="Shoes" />
                <div className="card-body">
                    <h2 className="card-title">
                        {course.name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>




    );
};

export default CourseCard;