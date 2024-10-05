import { Rating } from '@smastrom/react-rating';
import React, { useState } from 'react';

import { FaCalendarMinus } from 'react-icons/fa';
import { IoLocation, IoLogoUsd } from 'react-icons/io5';

const SingleDoctor = ({ doctor, activeDoctor, handleViewDetails }) => {
  const {
    id,
    name,
    available_days,
    designation,
    fees,
    rating,
    location,
    image,
  } = doctor;

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="doctor" className="rounded-xl" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{name}</h2>
          <p>{designation}</p>
          <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
          <hr />
          <div className="flex items-center ">
            <IoLocation className="text-xl"></IoLocation>
            <p className="ml-2">{location}</p>
          </div>
          <div className="flex items-center ">
            <FaCalendarMinus />
            <p className="ml-2">Available on{available_days}</p>
          </div>
          <div className="flex items-center ">
            <IoLogoUsd />
            <p className="ml-2"> {fees}</p>
          </div>

          <div className="card-actions">
            <button
              className={`btn w-full ${
                activeDoctor === id ? 'btn-warning' : 'btn-outline btn-warning'
              }`}
              onClick={() => handleViewDetails(id)}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleDoctor;
