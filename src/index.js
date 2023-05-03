import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Order_Now from "./components/Order_Now/Order_Now";
import Blog from "./components/Blog/Blog";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ChefCartDetails from "./components/ChefCart/ChefCartDetails";
import AuthProvider from "./components/Provider/AuthProvider";
import PrivateRoutes from "./components/Routers/PrivateRoutes";



const router = createBrowserRouter([
  {
    path: "/",    
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/order",
        element: <Order_Now></Order_Now>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/ChefCartDetails/:id",
        element: <PrivateRoutes><ChefCartDetails></ChefCartDetails></PrivateRoutes>,
        loader: ({ params }) => fetch(`http://localhost:5000/ChefCartDetails/${params.id}`),
      },

    

    ],


  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
