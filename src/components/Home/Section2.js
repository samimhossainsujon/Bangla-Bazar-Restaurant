import React from 'react';
import LazyLoad from 'react-lazy-load';


const Section2 = ({ section }) => {
    const { Buy_One_1_footName, Buy_One_1_footImg, Buy_One_1_footPara } = section
    return (
        <div>
            <div className="card w-full h-96 bg-base-100 shadow-xl">
                <figure><img src={Buy_One_1_footImg} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-black font-extrabold text-xl flex justify-center mb-1">{Buy_One_1_footName}</h2>
                    <div className='flex flex-col md:flex-row justify-between font-bold text-lg'>
                    <h1 className='text-blue-700'>Buy One Get One</h1>
                    <h1 className='text-red-600'>Only 5 day</h1>
                    </div>
                    <div className="card-actions justify-center mt-2">                                     
                        <button className="btn btn-outline btn-secondary">Order Now</button>
                    </div>
                </div>


                
            </div>


        </div>



    );
};

export default Section2;