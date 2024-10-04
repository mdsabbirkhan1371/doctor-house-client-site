import React from 'react';
import errorImage from '../../../src/assets/Required/errorPage.png';
import { Link, useRouteError } from 'react-router-dom';
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="text-center my-10">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to={'/'}>
        <img className="w-60 mx-auto" src={errorImage} alt="" />
      </Link>
    </div>
  );
};

export default ErrorPage;
