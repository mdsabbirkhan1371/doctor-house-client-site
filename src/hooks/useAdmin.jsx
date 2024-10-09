import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useAdmin = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: isAdmin } = useQuery({
    queryKey: [user?.email, 'isAdmin'],
    queryFn: async () => {
      const result = await axiosSecure.get(`/users/admin/${user?.email}`);
      return result.data.admin;
    },
  });
  return [isAdmin];
};

export default useAdmin;
