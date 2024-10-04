import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Therapy from '../../Component/Therapy/Therapy';
import Information from '../Information/Information';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Therapy></Therapy>
      <Information></Information>
    </div>
  );
};

export default Home;
