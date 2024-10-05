import React from 'react';
import { BsFillTelephoneOutboundFill } from 'react-icons/bs';
import { FaClock } from 'react-icons/fa';
import { IoLocation } from 'react-icons/io5';

const Information = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 items-center text-white gap-5 p-5">
      {/* Opening Hours Card */}
      <div className="flex gap-3  px-5 py-8 rounded bg-[#07332F] hover:bg-[#0B4E4A] transition-colors duration-300 items-center">
        <FaClock className="text-3xl" />
        <div>
          <h4 className="font-bold text-lg">Opening Hours</h4>
          <p className="text-sm md:text-base">
            Open 9.00 am to 5.00 pm <br />
            Everyday
          </p>
        </div>
      </div>

      {/*  location  Card */}
      <div className="flex gap-3 px-5 py-8 rounded bg-[#F7A582] hover:bg-[#cd5d5d] transition-colors duration-300 items-center">
        <IoLocation className="text-3xl"></IoLocation>
        <div>
          <h4 className="font-bold text-lg">Our Locations</h4>
          <p className="text-sm md:text-base">
            Dhanmondi 17,
            <br /> Dhaka -1200, Bangladesh
          </p>
        </div>
      </div>

      {/* Repeated Opening Hours Card */}
      <div className="flex gap-3 px-5 py-8 rounded bg-[#07332F] hover:bg-[#0B4E4A] transition-colors duration-300 items-center">
        <BsFillTelephoneOutboundFill className="txt-3xl"></BsFillTelephoneOutboundFill>

        <div>
          <h4 className="font-bold text-lg">Contact Us</h4>
          <p className="text-sm md:text-base">
            +88 01750 00 00 00 <br />
            +88 01750 00 00 00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Information;
