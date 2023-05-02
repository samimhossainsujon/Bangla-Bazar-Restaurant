import React from "react";
import { Link } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";

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

  return (
    <div className="card w-96 bg-slate-300 shadow-xl  ">
      <div className="avatar  justify-center">
        <div className="w-40 mt-2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={Chef_Picture} />
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title justify-center font-bold text-2xl">
          {Chef_Name}
        </h2>
        <div className="flex justify-between text-lg font-bold text-black">
          <h4>Experience {Years_of_experience} Years</h4>
          <h4>Recipe {Numbers_of_recipes} Item</h4>
        </div>
        <div className="flex justify-between">
          <button className="text-2xl flex text-black">
            {Likes} <AiFillLike className="ms-2 mt-1"></AiFillLike>
          </button>
          <Link
            to={`/ChefCartDetails/${id}`}
            className="label-text-alt link link-hover text-blue-500 text-xl"
          >
            {View_Recipes_Button}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefCart;
