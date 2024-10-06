import React from 'react';
import signUpImage from '../../assets/Required/signInUp.png';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const SignUp = () => {
  <Helmet>
    <title>Doctor Houser || Sign Up</title>
  </Helmet>;
  return (
    <div className="hero bg-base-200 min-h-screen p-5">
      <div className="hero-content flex-col lg:flex-row items-center gap-8 w-full lg:w-4/5 lg:gap-12">
        {/* Image container on the left */}
        <div className="text-center lg:text-left w-full lg:w-1/2 h-full flex justify-center items-center">
          <img
            src={signUpImage}
            alt="Login"
            className="max-w-full h-full object-cover" // Ensure the image covers the full height
          />
        </div>
        <div className="card bg-base-100 w-full max-w-md lg:w-1/2 shrink-0 shadow-2xl">
          <form className="card-body">
            <h3 className="text-center font-semibold text-xl mb-3">
              Sign Up to Doc House
            </h3>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Username</span>
              </label>
              <input
                name="username"
                type="text"
                placeholder="Enter Your User Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email Address</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter your Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
            </div>
            <input
              name="password"
              type="password"
              placeholder="Enter Your Password"
              className="input input-bordered"
              required
            />
            <div className="form-control mt-6">
              <input
                className="btn btn-error text-white w-full"
                type="submit"
                value="Create Account"
              />
            </div>
            <p className="mt-3 text-center">
              Already registered ? Go to
              <span className="text-orange-400 ml-2">
                <Link to="/login">LOGIN</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
