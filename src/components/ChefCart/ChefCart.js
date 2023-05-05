import React from "react";
import { Link } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";
import LazyLoad from "react-lazy-load";

const ChefCart = ({ Chefdata }) => {
  const {
    id,
    Chef_Picture,
    Chef_Name,
    Years_of_experience,
    Numbers_of_recipes,
    Likes,
    View_Recipes_Button,
    description,
    number_of_recipes,
  } = Chefdata;


  // console.log(Numbers_of_recipes);



  return (

    <div className="card w-full bg-slate-100 shadow-xl  ">
      <div className="avatar  justify-center">
        <div className="w-40 mt-2 rounded-full ring ring-primary 
        ring-offset-base-100 ring-offset-2">
          <LazyLoad height={200} width={200} threshold={0.5}>
            <img src={Chef_Picture} alt="" />
          </LazyLoad>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title justify-center font-extrabold
         text-2xl text-black">
          {Chef_Name}
        </h2>
        <div className="flex flex-col md:flex-row justify-between text-lg font-bold
         text-slate-700">
          <h4>Experience {Years_of_experience} Years</h4>
          <h4>Recipe {Numbers_of_recipes} Item</h4>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <button className="text-2xl flex text-black">
            {Likes} <AiFillLike className="ms-2 mt-1"></AiFillLike>
          </button>
          <Link to={`/ChefCartDetails/${id}`}
            className="label-text-alt link link-hover text-blue-500 text-xl"
          >{View_Recipes_Button}</Link>
        </div>
      </div>
    </div>







  );
};

export default ChefCart;
