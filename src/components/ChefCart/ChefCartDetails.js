import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AiFillLike, AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaRegStar, } from "react-icons/fa";
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { GiLoveMystery } from 'react-icons/gi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//================================================
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'



const ChefCartDetails = () => {


  const notify = (e) => {
    toast("Added to favorite!");
    e.target.disabled = true;
  }




  const Chefdata = useLoaderData();

  const {
    id, Chef_Picture, Chef_Name, Years_of_experience, Numbers_of_recipes,
    Likes, View_Recipes_Button, description, number_of_recipes,
    image_1, ingredients_1, ingredients_2, ingredients_3, image_2,
    image_3, recipe_1, recipe_2, recipe_3, cookingMethod_1, cookingMethod_2,
    cookingMethod_3, rating_1, rating_2, rating_3
  } = Chefdata;
  // console.log();

  return (
    <div>
      <div className="w-full bg-base-100 ">
        <figure>
          <img src={Chef_Picture} alt="Shoes" />
        </figure>
        <div>
          <h2 className="font-extrabold mt-10 text-2xl">
            Chef Name:- {Chef_Name}
          </h2>
          <p className="mt-10 text-lg">
            <span className="text-2xl font-bold text-black">description:-</span>{" "}
            {description}
          </p>
          <h1 className="text-xl font-bold mt-10">
            <span className="text-2xl font-bold text-black">Experience:-</span>{" "}
            {Years_of_experience} Year
          </h1>
          <button className="text-3xl flex text-blue-600 mt-8 ">
            <div className="text-black font-extrabold">Like {Likes}</div>
            <div>
              <AiFillLike className="ms-2 mt-1"></AiFillLike>
            </div>
          </button>
        </div>
      </div>


      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 py-3 px-3">

        <div className="card w-96  shadow-xl mt-10 bg-slate-300">
          <figure className="px-10 pt-10">
            <img src={image_1} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl font-extrabold text-black">{recipe_1}</h2>
            <p> <span className="text-lg text-black font-bold">Ingredients:</span>
              {
                <ul style={{ "list-style-type": "number" }}
                >
                  {ingredients_2.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              }
            </p>
            <p className="mb-6"><span className="text-black font-bold text-lg">Cooking Method:</span> {cookingMethod_1}</p>
            <div className="flex justify-between">



              <div className="card-actions justify-end">
                <button onClick={notify} className='btn btn-success'>Favorite</button>
                <ToastContainer />
              </div>

              <div className='flex items-center'>
                <Rating
                  style={{ maxWidth: 150 }}
                  value={Math.round(rating_1 || 0)} readOnly />
                <span className='ms-2 text-lg text-black font-extrabold'>
                  {rating_1}</span>
              </div>
            </div>
          </div>
        </div>


        <div className="card w-96 shadow-xl mt-10 bg-slate-300">
          <figure className="px-10 pt-10">
            <img src={image_2} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl font-extrabold text-black">{recipe_2}</h2>
            <p> <span className="text-lg text-black font-bold">Ingredients:</span>
              {
                <ul style={{ "list-style-type": "number" }}
                >
                  {ingredients_2.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              }
            </p>
            <p className="mb-6"><span className="text-black font-bold text-lg">Cooking Method: </span>{cookingMethod_2}</p>
            <div className="flex justify-between">




              <div className="card-actions justify-end">
                <button onClick={notify} className='btn btn-success'>Favorite</button>
                <ToastContainer />

              </div>

              <div className='flex items-center'>
                <Rating
                  style={{ maxWidth: 150 }}
                  value={Math.round(rating_2 || 0)} readOnly />
                <span className='ms-2 text-lg text-black font-extrabold'> {rating_2}</span>
              </div>
            </div>
          </div>
        </div>


        <div className="card w-96 shadow-xl mt-10 bg-slate-300">
          <figure className="px-10 pt-10">
            <img src={image_3} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl font-extrabold text-black">{recipe_3}</h2>
            <p> <span className="text-lg text-black font-bold">Ingredients:</span>
              {
                <ul style={{ "list-style-type": "number" }}
                >
                  {ingredients_3.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              }
            </p>
            <p className="mb-6"><span className="text-black font-bold text-lg">Cooking Method:</span> {cookingMethod_3}</p>
            <div className="flex justify-between">



              <div className="card-actions justify-end">
                <button onClick={notify} className='btn btn-success'>Favorite</button>
                <ToastContainer />
              </div>

              <div className='flex items-center'>
                <Rating
                  style={{ maxWidth: 150 }}
                  value={Math.round(rating_3 || 0)} readOnly />
                <span className='ms-2 text-lg text-black font-extrabold'> {rating_3}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefCartDetails;




