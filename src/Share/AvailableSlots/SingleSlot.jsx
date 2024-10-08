import React, { useState } from 'react';
import Modal from './Modal';
import { toast } from 'react-toastify';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const SingleSlot = ({ availableServices }) => {
  const { name, image, available_time, categories } = availableServices;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleBookingSubmit = bookingData => {
    console.log('Booking Information:', bookingData);
    const bookingItem = {
      name: user.displayName,
      email: user.email,
      date: bookingData.date,
      time: bookingData.time,
      serviceName: bookingData.category,
    };
    if (bookingData) {
      axiosPublic.post('/bookings', bookingItem).then(res => {
        if (res.data.insertedId) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your appointment has been Taken!!',
            showConfirmButton: false,
            timer: 2500,
          });
          navigate('/');
        }
      });
    }
    // Here, you can also make an API call to submit booking data
  };
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
            <button
              className="btn btn-primary w-full"
              onClick={() => setIsModalOpen(true)} // Open the modal
            >
              Book Appointment
            </button>
          </div>
          {/* Modal Component */}
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSubmit={handleBookingSubmit} // Handle booking submission
          />
        </div>
      </div>
    </div>
  );
};

export default SingleSlot;
