import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="px-10 p-5">
      <Header></Header>
      <div className="px-6">
        <Outlet />
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;
