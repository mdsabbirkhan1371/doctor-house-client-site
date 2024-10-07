import React from 'react';

const SectionHeader = ({ content }) => {
  return (
    <div>
      <div className="navBg p-5 md:px-10 md:py-44 space-y-2 text-white text-center md:text-left">
        <h5 className="text-sm md:text-base lg:text-lg">Home / {content}</h5>
        <h3 className="text-xl md:text-2xl lg:text-4xl font-bold">{content}</h3>
      </div>
    </div>
  );
};

export default SectionHeader;
