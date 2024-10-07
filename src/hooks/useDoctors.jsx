import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from './useAxiosPublic';

const useDoctors = () => {
  const axiosPublic = useAxiosPublic();
  const { data: doctors = [], refetch } = useQuery({
    queryKey: ['doctors'],
    queryFn: async () => {
      const result = await axiosPublic.get('/doctors');
      return result.data;
    },
  });
  return [doctors, refetch];
};

export default useDoctors;
