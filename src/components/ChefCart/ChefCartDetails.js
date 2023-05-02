import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";

const ChefCartDetails = () => {
  //   const { id } = useParams();
  const Chefdata = useLoaderData();

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
    </div>
  );
};

export default ChefCartDetails;
