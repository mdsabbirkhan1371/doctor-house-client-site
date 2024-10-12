import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './useAxiosSecure';

const useAllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: users = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const result = await axiosSecure.get('/users');
      return result.data;
    },
  });
  return [users, refetch, isLoading];
};

export default useAllUsers;
