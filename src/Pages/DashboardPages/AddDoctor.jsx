import React, { useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const imageHoistingApiKey = import.meta.env.VITE_IMAGE_API_KEY;
const imageUploadApiKey = `https://api.imgbb.com/1/upload?key=${imageHoistingApiKey}`;

const AddDoctor = () => {
  const [specialty, setSpecialty] = useState('');
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  const handleImageChange = e => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('specialty', specialty);
    formData.append('image', image);

    console.log('Doctor Info:', {
      name,
      email,
      specialty,
      image,
    });
    const doctorInfo = {
      name,
      email,
      specialty,
      image,
    };

    try {
      const result = await axiosPublic.post(imageUploadApiKey, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(result.data);
      const imageUrl = result.data.data.url;
      if (result.data.success) {
        const doctorInfo = {
          name,
          email,
          specialty,
          image: imageUrl,
        };

        console.log('Doctor Info to Save:', doctorInfo);

        const doctorResult = await axiosSecure.post('/doctors', doctorInfo);
        // console.log(doctorResult.data);
        if (doctorResult.data.insertedId) {
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: ` Has been added successfully`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }

    // Example API call here
    // fetch('/api/submit', { method: 'POST', body: formData });
  };

  return (
    <div className="container mx-auto p-5">
      <h3 className="text-xl font-semibold text-center mb-5">
        Add A New Doctor
      </h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name Input */}
        <label className="form-control w-full lg:w-1/2 mx-auto">
          <div className="label">
            <span className="label-text">Name</span>
          </div>
          <input
            type="text"
            placeholder="Doctor Name"
            className="input input-bordered w-full"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </label>

        {/* Email Input */}
        <label className="form-control w-full lg:w-1/2 mx-auto">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </label>

        {/* Specialty Select */}
        <label className="form-control w-full lg:w-1/2 mx-auto">
          <div className="label">
            <span className="label-text">Specialty</span>
          </div>
          <select
            className="select select-bordered w-full"
            value={specialty}
            onChange={e => setSpecialty(e.target.value)}
            required
          >
            <option disabled value="">
              Select One
            </option>
            <option value="Orthopedic">Orthopedic</option>
            <option value="Gynecology">Gynecology</option>
            <option value="Neurology">Neurology</option>
            <option value="Dental Care">Dental Care</option>
            <option value="Gastrology">Gastrology</option>
            <option value="Cosmetic Surgery">Cosmetic Surgery</option>
          </select>
        </label>

        {/* Image Upload Field */}
        <label className="form-control w-full lg:w-1/2 mx-auto">
          <div className="label">
            <span className="label-text">Upload Doctor Image</span>
          </div>
          <input
            type="file"
            className="input input-bordered w-full"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </label>

        {/* Image Preview */}
        {image && (
          <div className="my-5 w-full lg:w-1/2 mx-auto">
            <img
              src={URL.createObjectURL(image)}
              alt="Doctor Preview"
              className="w-full h-40 object-cover rounded"
            />
            <p className="text-center mt-2">Selected Image: {image.name}</p>
          </div>
        )}

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary mt-5 w-full lg:w-1/2"
          >
            Add Doctor
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDoctor;
