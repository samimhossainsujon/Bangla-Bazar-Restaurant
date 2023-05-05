import React from 'react';
import LazyLoad from 'react-lazy-load';

const Section1 = ({ section }) => {
    const { discount_Foot_1_Name, discount_Foot_1_discount, discount_Foot_1_Payment, discount_Foot_Img } = section
    // console.log(discount_Foot_1_Name,);
    return (
        <div>
            <div className="card h-96 bg-base-100 shadow-xl">
                <figure><img src={discount_Foot_Img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-black font-extrabold text-xl justify-center items-center mb-3">{discount_Foot_1_Name}</h2>
                    <div className='flex flex-col md:flex-row justify-evenly text-purple-600 '>
                        <p className='font-extrabold text-lg mb-4'>{discount_Foot_1_Payment} payment</p>
                        <p className=' font-extrabold text-lg'>{discount_Foot_1_discount}% discount</p>
                    </div>
                    <div className="card-actions justify-center">
                        <button className="btn btn-outline btn-secondary">Order Now</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section1;