import React, { useEffect, useState } from 'react';
import SingleDoctor from './SingleDoctor';
import useDoctors from '../../hooks/useDoctors';

const Doctors = () => {
  const [doctors] = useDoctors();
  return (
    <div>
      <div className="text-center my-16">
        <h3 className="text-2xl md:text-4xl font-bold mb-4">
          Our Expert Doctors
        </h3>
        <p className="text-sm md:text-base lg:text-lg max-w-3xl mx-auto">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {doctors?.map(doctor => (
          <SingleDoctor key={doctor._id} doctor={doctor}></SingleDoctor>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
