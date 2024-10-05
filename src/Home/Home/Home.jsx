import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Therapy from '../../Component/Therapy/Therapy';
import Information from '../Information/Information';
import Reviews from '../Reviews/Reviews';
import Doctors from '../Doctors/Doctors';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Therapy></Therapy>
      <Information></Information>
      <Reviews></Reviews>
      <Doctors></Doctors>
    </div>
  );
};

export default Home;
