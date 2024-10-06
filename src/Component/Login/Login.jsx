import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginImage from '../../assets/Required/signInUp.png';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const Login = () => {
  const { signInUser } = useAuth();
  const navigate = useNavigate();
  const handleForm = event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    console.log({ email, password });

    // sign in user
    signInUser(email, password)
      .then(res => {
        console.log({ res });
        const user = res.user;
        if (user) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Login Into Your Account',
            showConfirmButton: false,
            timer: 2000,
          });
          // Clear form inputs
          event.target.reset();
          navigate('/');
        }
      })
      .catch(err => {
        toast.error(err.message);
      });
  };
  return (
    <div>
      <Helmet>
        <title>Doctor || Login</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen p-5">
        <div className="hero-content flex-col lg:flex-row items-center gap-8 w-full lg:w-4/5 lg:gap-12">
          {/* Image container on the left */}
          <div className="text-center lg:text-left w-full lg:w-1/2 h-full flex justify-center items-center">
            <img
              src={loginImage}
              alt="Login"
              className="max-w-full h-full object-cover" // Ensure the image covers the full height
            />
          </div>
          <div className="card bg-base-100 w-full max-w-md lg:w-1/2 shrink-0 shadow-2xl">
            <form onSubmit={handleForm} className="card-body">
              <h3 className="text-center font-semibold text-xl mb-3">
                Sign in to Doc House
              </h3>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Email Address
                  </span>
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
                <div className="flex justify-between items-center">
                  <label className="label">
                    <span className="label-text font-semibold">Password</span>
                  </label>
                  <label className="label">
                    <a
                      href="#"
                      className="label-text-alt link link-hover text-orange-400"
                    >
                      Forgot password?
                    </a>
                  </label>
                </div>
                <input
                  name="password"
                  type="password"
                  placeholder="Enter Your Password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-error text-white w-full"
                  type="submit"
                  value="Login"
                />
              </div>
              <p className="mt-3 text-center">
                Please register at first. Go to
                <span className="text-orange-400 ml-2">
                  <Link to="/signUp">SIGN UP</Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
