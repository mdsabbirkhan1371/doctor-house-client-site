import React from 'react';
import ReviewsSlider from './ReviewsSlider';

const Reviews = () => {
  return (
    <div>
      <div className="text-center my-16">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          What Our Clients Says?
        </h2>
        <p className="text-sm md:text-base lg:text-lg max-w-3xl mx-auto">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </div>
      <ReviewsSlider></ReviewsSlider>
    </div>
  );
};

export default Reviews;
