import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
  const { name, image, _id } = service;
  return (
    <div>
      <Link to={`/services/availableSlots/${_id}`}>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={image} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Service;
