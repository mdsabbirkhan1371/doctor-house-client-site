import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SectionHeader from '../../Share/SectionHeader/SectionHeader';
import { Rating } from '@smastrom/react-rating';
import { IoLocation } from 'react-icons/io5';
import OtherInformation from './OtherInformation';

const DoctorProfile = () => {
  const doctor = useLoaderData();
  const {
    _id,
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
      <SectionHeader content={'Doctor Profile'}></SectionHeader>
      <div className="my-10 px-5 md:px-10">
        <div className="hero bg-base-200 py-5 md:py-10 rounded-lg shadow-md">
          <div className="hero-content flex-col lg:flex-row lg:items-start gap-10">
            <img
              src={image}
              className="w-full max-w-xs rounded-lg shadow-2xl mx-auto lg:mx-0"
              alt={name}
            />
            <div className="w-full lg:w-2/3 space-y-4 text-center lg:text-left">
              <h1 className="text-2xl lg:text-3xl font-bold">{name}</h1>
              <p className="text-lg">{designation}</p>
              <p className="flex justify-center lg:justify-start gap-2 items-center">
                <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
                <span className="text-gray-600">(35)</span>
              </p>
              <div className="flex items-center justify-center lg:justify-start text-lg">
                <IoLocation className="text-2xl text-primary" />
                <p className="ml-2">{location}</p>
              </div>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-5">
                <button className="btn btn-outline">Dental Filling</button>
                <button className="btn btn-outline">Teeth Whitening</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OtherInformation doctor={doctor}></OtherInformation>
    </div>
  );
};

export default DoctorProfile;
