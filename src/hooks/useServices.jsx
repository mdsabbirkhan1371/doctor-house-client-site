import React, { useEffect, useState } from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useServices = () => {
  const axiosPublic = useAxiosPublic();
  const { data: services = [], refetch } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const res = await axiosPublic.get('/services');
      return res.data;
    },
  });
  return [services, refetch];
};

export default useServices;
