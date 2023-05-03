import React, { useEffect, useState } from "react";
import Carousel from "../Carousel/Carousel";
import ChefCart from "../ChefCart/ChefCart";

const Home = () => {
  const [Chefdatas, setChefData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => setChefData(data));
  }, []);
    // console.log(Chefdatas);

  return (
    <div>
      <Carousel />

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 py-3 px-3">
        {Chefdatas.map((Chefdata) => (
          <ChefCart key={Chefdata.id} Chefdata={Chefdata}></ChefCart>
        ))}
      </div>

      
    </div>
  );
};

export default Home;
