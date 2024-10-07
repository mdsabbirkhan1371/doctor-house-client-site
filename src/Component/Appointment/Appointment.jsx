import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import table from '../../assets/Required/chair 1.png';
import 'react-datepicker/dist/react-datepicker.css';
import useServices from '../../hooks/useServices';
import Service from '../../Home/Service/Service';

const Appointment = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [services] = useServices();

  // Format the date to display it in the desired format
  const formattedDate = format(startDate, 'MMMM d, yyyy');

  return (
    <div>
      {/* Header Section */}
      <div className="navBg px-5 py-5 md:px-10 md:py-24 text-white text-center md:text-left">
        <h5 className="text-sm md:text-base lg:text-lg">Home / Appointment</h5>
        <h3 className="text-xl md:text-2xl lg:text-4xl font-bold">
          Appointment
        </h3>
      </div>

      {/* Date Picker and Chair Section */}
      <div className="flex flex-col md:flex-row items-center justify-center my-5 md:my-14 gap-10 px-5 lg:px-14">
        <div className="w-full md:w-1/2 lg:w-1/3 md:py-14 flex justify-center">
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            inline
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3">
          <img
            className="w-full max-w-md mx-auto object-contain"
            src={table}
            alt="Chair"
          />
        </div>
      </div>

      {/* Available Services Section */}
      <div className="px-5 lg:px-14">
        <div className="text-center mb-10">
          <p className="text-orange-400 text-sm md:text-base">{`Available Service on ${formattedDate}`}</p>
          <h3 className="text-2xl md:text-3xl font-bold">
            Please Select a Service
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
          {services.map(service => (
            <Service service={service} key={service.id}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appointment;
