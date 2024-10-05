import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const ReviewsSlider = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('reviews.json')
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);

  // Create pairs of reviews for each slide
  const pairedReviews = [];
  for (let i = 0; i < reviews.length; i += 2) {
    pairedReviews.push(reviews.slice(i, i + 2));
  }

  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
        }}
      >
        {pairedReviews.map((pair, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              {pair.map(review => (
                <div
                  key={review.id}
                  className="review-card w-full md:w-1/2 lg:max-w-md bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
                >
                  <img
                    src={review.image}
                    alt={review.name}
                    className="review-image w-24 h-24 rounded-full mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-center">
                    {review.name}
                  </h3>
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                    className="mb-3"
                  />
                  <p className="text-gray-600 text-center">{review.review}</p>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ReviewsSlider;
