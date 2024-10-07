import { useQuery } from '@tanstack/react-query';

import useAxiosPublic from './useAxiosPublic';

const useReviews = () => {
  const axiosPublic = useAxiosPublic();
  const { data: reviews = [] } = useQuery({
    queryKey: ['reviews'],
    queryFn: async () => {
      const result = await axiosPublic.get('/reviews');
      return result.data;
    },
  });
  return [reviews];
};

export default useReviews;
