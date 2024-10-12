import React from 'react';
import useDoctors from '../../hooks/useDoctors';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const ManageDoctor = () => {
  const [doctors, refetch] = useDoctors();
  const axiosSecure = useAxiosSecure();
  console.log({ doctors });

  // Handle the deletion of a doctor
  const handleDelete = id => {
    console.log(id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/doctors/${id}`).then(res => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: 'Deleted!',
              text: 'Doctor has been deleted.',
              icon: 'success',
            });
          }
        });
      }
    });
  };

  // Placeholder for handleEdit function
  const handleEdit = id => {
    console.log(`Edit doctor with id: ${id}`);
    // Logic for handling doctor edit
  };

  return (
    <div className="container mx-auto p-5">
      <h3 className="text-2xl font-semibold mb-5">Manage Doctors</h3>

      {/* Doctor Table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Doctor Name</th>

              <th className="px-4 py-2">Specialty</th>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {doctors && doctors.length > 0 ? (
              doctors.map((doctor, index) => (
                <tr key={doctor._id} className="border-b">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{doctor.name}</td>
                  <td className="px-4 py-2">
                    {doctor.specialty || doctor.designation}
                  </td>
                  <td className="px-4 py-2">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleEdit(doctor._id)}
                      className="btn btn-sm btn-info mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(doctor._id)}
                      className="btn btn-sm btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  No doctors found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctor;
