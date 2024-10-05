import React from 'react';
import therapyPic from '../../../src/assets/services/electrogastro.png';

const Therapy = () => {
  return (
    <div className="flex flex-col md:flex-row justify-evenly items-center gap-5 p-5 ">
      <div className="flex-1 mb-5 md:mb-0">
        <img
          src={therapyPic}
          alt="Therapy"
          className="w-full h-auto max-w-xs md:max-w-md lg:max-w-lg"
        />
      </div>
      <div className="flex-1 text-center md:text-left p-4 md:p-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Electro Gastrology Therapy
        </h2>
        <p className="mb-4 text-sm md:text-base lg:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Sed ut perspiciatis unde omnis iste natus error.
        </p>
        <p className="mb-6 text-sm md:text-base lg:text-lg">
          Sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
          eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
          vitae dicta sunt explicabo.
        </p>
        <button className="btn btn-outline btn-warning">More Details</button>
      </div>
    </div>
  );
};

export default Therapy;
