import React from 'react';

const SingleSlot = ({ availableServices }) => {
  const { name, image, available_time, categories } = availableServices;

  return (
    <div className="flex justify-center items-center min-h-screen">
      {' '}
      {/* Centering the card */}
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="service" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>

          {/* Render available_time if it's an array */}
          <div>
            {Array.isArray(available_time) && available_time.length > 0 ? (
              <ul>
                <p>Available Time</p>
                <hr />
                {available_time.map((available, i) => (
                  <li key={i}>{available.time}</li> // Return JSX for each time slot
                ))}
                <hr />
              </ul>
            ) : (
              <p>No available time slots</p>
            )}
          </div>

          {/* Render categories if it's an array */}
          <div className="mt-2">
            <h3 className="font-bold">Category:</h3>
            {Array.isArray(categories) && categories.length > 0 ? (
              <ul>
                {categories.map((cat, i) => (
                  <li key={i}>{cat}</li> // Display each category
                ))}
              </ul>
            ) : (
              <p>No category information available</p>
            )}
          </div>

          <div className="card-actions w-full">
            <button className="btn btn-primary w-full">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleSlot;
