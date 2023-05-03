import React, { useContext, useState } from "react";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createUser, } = useContext(AuthContext);
  const [error, seterror] = useState();
  const [success, setsuccess] = useState();


  const handelRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    




    if (!password || password.length < 6) {
      seterror("Please enter 6+ correct");
      return;
    }


    createUser(email, password)
      .then(result => {
        const CreatedUser = result.user
        setsuccess("loging doen");
      }).catch(error => {
        seterror(error.message);
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

                <p className="text-lg text-red-700 font-bold">{error}</p>
                <p className="text-lg text-success font-bold">{success}</p>


                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register Now</button>
                </div>

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
