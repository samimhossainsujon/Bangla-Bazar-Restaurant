import React, { useContext } from "react";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { BsGoogle } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

const Register = () => {
  const { createUser,SingInGoogle,SignInGithub } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  console.log("login page ", location);
  const from = location.state?.from?.pathname || "/";

  //=============================
  //google sing in google
  //=============================

  const handelGoogleSingIn = () => {
    SingInGoogle();
    console.log(SingInGoogle);
    navigate(from, { replace: true });
  };
  //=============================

 
  
  
  //=============================
  //google sing in github
  //=============================
  const handelgithubSingIn = () => {
    SignInGithub();
    navigate(from, { replace: true });
  };

  //=============================

  const handelRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password, photo);

    createUser(email, password)
    .then(result =>{
      const CreatedUser = result.user
      console.log(CreatedUser);
    }).catch(error =>{
      console.log(error);
    })
  };

  return (
    <div>
    <Form onSubmit={handelRegister}>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-5">
              Register Your Account!
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-5">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="input input-bordered"
                  name="name"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your Photo Url here"
                  name="photo"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Register Now</button>
              </div>

              <button onClick={handelGoogleSingIn} className="btn btn-outline btn-secondary text-2xl mt-6">
                <BsGoogle className="mr-5 "></BsGoogle>google Login</button>
               
                <button onClick={handelgithubSingIn} className="btn btn-outline btn-success font-bold mt-5 mb-3 text-2xl text-black">
                 <AiFillGithub className="mr-5"></AiFillGithub>Git hub</button>
              <Link
                to="/login"
                className="label-text-alt link link-hover text-blue-500 text-lg"
              >
                already have an account login here.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Form>
  </div>
);
};





export default Register;
