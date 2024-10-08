import React from 'react';
import useAllUsers from '../../hooks/useAllUsers';
import axios from 'axios';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AllUsers = () => {
  const [users, refetch] = useAllUsers();
  const axiosSecure = useAxiosSecure();

  // Function to make a user an admin
  const makeAdmin = async userId => {
    try {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, make user admin!',
      }).then(result => {
        if (result.isConfirmed) {
          axiosSecure.patch(`/users/admin/${userId}`).then(res => {
            console.log(res);
            if (res.data.modifiedCount > 0) {
              refetch();
              Swal.fire({
                title: 'Granted!',
                text: 'Admin role has been granted!!',
                icon: 'success',
              });
            }
          });
        }
      });
    } catch (error) {
      console.error('Error making user admin:', error);
      alert('Failed to make user an admin');
    }
  };

  return (
    <div className="p-4">
      <h4 className="text-lg font-semibold mb-4">All Users: {users.length}</h4>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-white shadow-md rounded-md overflow-hidden">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-2 sm:px-4 md:px-6 text-left">Name</th>
              <th className="py-3 px-2 sm:px-4 md:px-6 text-left">Email</th>
              <th className="py-3 px-2 sm:px-4 md:px-6 text-center">Role</th>
              <th className="py-3 px-2 sm:px-4 md:px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {users.map(user => (
              <tr
                key={user._id} // Use user._id as it's from MongoDB
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-2 sm:px-4 md:px-6 text-left whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="font-medium">{user.name}</span>
                  </div>
                </td>
                <td className="py-3 px-2 sm:px-4 md:px-6 text-left">
                  <span>{user.email}</span>
                </td>
                <td className="py-3 px-2 sm:px-4 md:px-6 text-center">
                  <span
                    className={`py-1 px-3 rounded-full text-xs ${
                      user.role === 'admin'
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-300 text-gray-700'
                    }`}
                  >
                    {user.role}
                  </span>
                </td>
                <td className="py-3 px-2 sm:px-4 md:px-6 text-center">
                  {user.role !== 'admin' && (
                    <div className="flex flex-col space-y-3">
                      <button
                        onClick={() => makeAdmin(user._id)}
                        className="w-full bg-blue-500 text-white py-1 px-3 rounded-md text-xs hover:bg-blue-600"
                      >
                        Make Admin
                      </button>
                      <button className="w-full bg-red-500 text-white py-1 px-3 rounded-md text-xs hover:bg-red-600">
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
