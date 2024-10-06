import React from 'react';
import signUpImage from '../../assets/Required/signInUp.png';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../hooks/useAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
const SignUp = () => {
  const { createAccount, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const handleForm = event => {
    event.preventDefault();
    // Create a FormData object, passing the form element to it
    const formData = new FormData(event.target);
    console.log(formData);
    // Get the values from the FormData object
    const name = formData.get('name');
    const username = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');

    console.log('Form Data:', { name, username, email, password });
    // create account with email and password
    createAccount(email, password)
      .then(res => {
        const user = res.user;
        // update user
        updateUserProfile(name, username).then(() => {
          console.log('Update user');
          if (user) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your Account has been Created',
              showConfirmButton: false,
              timer: 2000,
            });
            // Clear form inputs
            event.target.reset();
            navigate('/');
          }
        });
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log({ errorMessage, errorCode });
        toast.error(errorMessage);
        // ..
      });
  };

  return (
    <div>
      <Helmet>
        <title>Doctor || SignUp</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen p-5">
        <div className="hero-content flex-col lg:flex-row items-center gap-8 w-full lg:w-4/5 lg:gap-12">
          {/* Image container on the left */}
          <div className="text-center lg:text-left w-full lg:w-1/2 h-full flex justify-center items-center">
            <img
              src={signUpImage}
              alt="Login"
              className="max-w-full h-full object-cover"
            />
          </div>
          <div className="card bg-base-100 w-full max-w-md lg:w-1/2 shrink-0 shadow-2xl">
            <form onSubmit={handleForm} className="card-body">
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
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
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
                  value="Create Account"
                />
              </div>
              <p className="mt-3 text-center">
                Already registered? Go to
                <span className="text-orange-400 ml-2">
                  <Link to="/login">LOGIN</Link>
                </span>
              </p>
            </form>
            <ToastContainer></ToastContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
