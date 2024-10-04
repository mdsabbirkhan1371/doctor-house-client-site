import React from 'react';
import bannerImg from '../../../src/assets/Required/homeDoctor.png';

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center text-white navBg justify-evenly p-5">
      {/* text content */}
      <div className="text-center md:text-left mb-5 md:mb-0 space-y-2">
        <h2 className="font-bold text-2xl md:text-4xl lg:text-4xl">
          Your Best Medical <br />
          Help Center
        </h2>
        <p>
          Lorem Ipsum is simply dummy text they are printing typesetting has
          been the industry’s stardard.
        </p>
        <button className="btn btn-warning text-white">All Service</button>
      </div>
      <div>
        <img
          className=" w-[200px] md:w-[300px] lg:w-[400px]"
          src={bannerImg}
          alt="Banner"
        />
      </div>
    </div>
  );
};

export default Banner;
