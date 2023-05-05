import React, { useEffect, useState } from "react";
import ChefCart from "../ChefCart/ChefCart";
import Img_Banner from "../Img_Banner/Img_Banner";
import Section1 from "./Section1";
import Section2 from "./Section2";
import { CirclesWithBar } from 'react-loader-spinner';







function Home() {
  const [Chefdatas, setChefData] = useState([]);
  const [SectionOne, setSection1] = useState([]);
  const [SectionTwo, setSection2] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://assignment-10-server-side-samimhossainsujon.vercel.app/")
      .then((res) => res.json())
      .then(data => {
        setChefData(data);
        setLoading(false);
      })
  }, []);



  useEffect(() => {
    fetch("https://assignment-10-server-side-samimhossainsujon.vercel.app/section1")
      .then((res) => res.json())
      .then(data => {
        setSection1(data);
        setLoading(false);
      })
  }, [])

  console.log(SectionOne);


  useEffect(() => {
    fetch("https://assignment-10-server-side-samimhossainsujon.vercel.app/section2")
      .then((res) => res.json())
      .then(data => {
        setSection2(data);
        setLoading(false);
      })
  }, [])

  console.log(SectionTwo);

  return (
    <div>



      {/* 
      //================================
      // Banner section with img
      //================================
       */}
      <Img_Banner></Img_Banner>



      {/* 
      //================================
      // Chef card data showing map 
      //================================
       */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 py-3 px-3">

        {loading ? (<div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}>
          <CirclesWithBar
            height="100"
            width="100"
            color="white"
            ariaLabel='circles-with-bar-loading'
          />
        </div>) : (Chefdatas.map((Chefdata) => (
          <ChefCart key={Chefdata.id} Chefdata={Chefdata}></ChefCart>
        )
        ))}




      </div>





      {/* 
      //================================
      // buy one and get one free section
      //================================
       */}

      <div className="mt-14">
        <h1 className="text-4xl text-black font-extrabold 
        text-center underline underline-offset-8">Buy One Get One Free </h1>

      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 py-3 px-3">
        {SectionTwo.map((section) => (
          <Section2 key={section.id} section={section}></Section2>
        ))}
      </div>




      {/* 
      //================================
      // section 1 payment and cash back
      //================================
       */}


      <div className="mt-14">
        <h1 className="text-4xl text-black font-extrabold 
        text-center underline underline-offset-8">Online Payment Discount</h1>

      </div>


      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 py-3 px-3">
        {SectionOne.map((section) => (
          <Section1 key={section.id} section={section}></Section1>
        ))}
      </div>







    </div>
  );
}

export default Home;
