import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosPublic from './useAxiosPublic';

const useMyBookings = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const {
    data: bookings = [], // Ensure bookings is an array
    refetch,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['bookings', user?.email], // Run query only when email is available
    queryFn: async () => {
      if (user?.email) {
        const result = await axiosPublic.get(`/bookings?email=${user.email}`);
        return Array.isArray(result.data) ? result.data : [];
      }
      return [];
    },
    enabled: !!user?.email, // Ensures the query only runs when email is defined
  });

  return [bookings, isLoading, isError, refetch];
};

export default useMyBookings;
