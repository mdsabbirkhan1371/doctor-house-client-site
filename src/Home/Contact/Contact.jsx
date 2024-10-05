import React from 'react';
import { BsFillTelephoneOutboundFill } from 'react-icons/bs';
import { IoLocation } from 'react-icons/io5';

const Contact = () => {
  return (
    <div className="navBg my-10 p-10 rounded-xl">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 p-6 lg:p-16">
        <div className="flex-1 text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Contact With Us
          </h3>
          <p className="mb-6 text-sm lg:text-base">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi.
          </p>
          <div className="flex items-center mb-4">
            <BsFillTelephoneOutboundFill className="text-xl lg:text-3xl mr-2" />
            <p className="text-sm lg:text-base">+88 01750 14 14 14</p>
          </div>
          <div className="flex items-center">
            <IoLocation className="text-xl lg:text-3xl mr-2" />
            <p className="text-sm lg:text-base">Dhanmondi, Dhaka, Bangladesh</p>
          </div>
        </div>
        <div className="flex-1">
          <form>
            <div className="flex flex-col lg:flex-row gap-4 mb-4">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered input-accent w-full"
              />
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered input-accent w-full"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-4 mb-4">
              <input
                type="number"
                placeholder="Mobile Number"
                className="input input-bordered input-accent w-full"
              />
              <input
                type="text"
                placeholder="Doctor Name"
                className="input input-bordered input-accent w-full"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
              <input
                type="date"
                placeholder="Date"
                className="input input-bordered input-accent w-full"
              />
              <input
                type="time"
                placeholder="Time"
                className="input input-bordered input-accent w-full"
              />
            </div>
            <input
              className="btn btn-warning text-white w-full mt-2"
              value={'Book Now'}
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
