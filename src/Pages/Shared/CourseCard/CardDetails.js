import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CardDetails = () => {

    const course = useLoaderData()
    console.log(course)
    return (
        <div className='ml-5'>

            <div className="card w-full bg-gray-200 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CardDetails;