import React from 'react';
import { Outlet } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import useMyBookings from '../../hooks/useMyBookings';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const MyBookings = () => {
  const [bookings, isLoading, isError, refetch] = useMyBookings();
  const axiosPublic = useAxiosPublic();

  // Show loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div
          className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  // Show error state
  if (isError) {
    return (
      <div className="text-center text-red-500">
        <p>Error fetching bookings. Please try again.</p>
      </div>
    );
  }

  // Handle booking cancellation
  const handleBooking = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, cancel it!',
    }).then(result => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/bookings/${id}`).then(res => {
          if (res.status === 200) {
            Swal.fire({
              title: 'Deleted!',
              text: 'Your appointment has been cancelled.',
              icon: 'success',
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="mb-8">
        <h3 className="text-xl font-bold">
          My Appointment: {Array.isArray(bookings) ? bookings.length : 0}
        </h3>

        {Array.isArray(bookings) && bookings.length === 0 ? (
          <p>No bookings found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-300 mt-4">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-2 sm:px-4 py-2 text-xs sm:text-base">
                    Doctor's Name
                  </th>
                  <th className="border px-2 sm:px-4 py-2 text-xs sm:text-base">
                    Date
                  </th>
                  <th className="border px-2 sm:px-4 py-2 text-xs sm:text-base">
                    Time
                  </th>
                  <th className="border px-2 sm:px-4 py-2 text-xs sm:text-base">
                    Service Name
                  </th>
                  <th className="border px-2 sm:px-4 py-2 text-xs sm:text-base">
                    Phone
                  </th>
                  <th className="border px-2 sm:px-4 py-2 text-xs sm:text-base">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(bookings) &&
                  bookings.map((booking, index) => (
                    <tr key={index} className="text-center">
                      <td className="border px-2 sm:px-4 py-2">
                        {booking.doctorName}
                      </td>
                      <td className="border px-2 sm:px-4 py-2">
                        {booking.date}
                      </td>
                      <td className="border px-2 sm:px-4 py-2">
                        {booking.time}
                      </td>
                      <td className="border px-2 sm:px-4 py-2">
                        {booking.serviceName}
                      </td>
                      <td className="border px-2 sm:px-4 py-2">
                        {booking.number}
                      </td>
                      <td className="border px-2 sm:px-4 py-2">
                        <button
                          onClick={() => handleBooking(booking._id)}
                          className="btn btn-error btn-xs px-3 sm:px-5 py-2"
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MyBookings;
