import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ChefCartDetails = () => {
//   const { id } = useParams();
  const Chefdata = useLoaderData();
  
  const {id, Chef_Picture,  Chef_Name, Years_of_experience,Numbers_of_recipes,
    Likes, View_Recipes_Button, description,
    number_of_recipes, } = Chefdata;
  return (
    <div>
      <h1> this is ChefCartDetails id {id} </h1>
      <h1>{Chef_Name}</h1>
      <img src={Chef_Picture} alt="" />
    </div>
  );
};

export default ChefCartDetails;
