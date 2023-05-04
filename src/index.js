import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ChefCartDetails from "./components/ChefCart/ChefCartDetails";
import AuthProvider from "./components/Provider/AuthProvider";
import PrivateRoutes from "./components/Routers/PrivateRoutes";
import ErrorPage from "./components/ErrorPage/ErrorPage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home></Home>,

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
        loader: ({ params }) => fetch(`https://assignment-10-server-side-samimhossainsujon.vercel.app/ChefCartDetails/${params.id}`),
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
