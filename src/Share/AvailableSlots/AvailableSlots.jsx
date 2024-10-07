import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import { useLoaderData } from 'react-router-dom';
import SingleSlot from './SingleSlot';

const AvailableSlots = () => {
  const availableServices = useLoaderData();
  console.log({ availableServices });
  return (
    <div>
      <SectionHeader content={'Available Slots'}></SectionHeader>
      <div>
        <SingleSlot availableServices={availableServices}></SingleSlot>
      </div>
    </div>
  );
};

export default AvailableSlots;
