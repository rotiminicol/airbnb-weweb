import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { xanoAPI, Listing } from '../lib/api';

export const useListings = (params?: {
  country?: string;
  search?: string;
  minPrice?: number;
  maxPrice?: number;
  guests?: number;
}) => {
  return useQuery({
    queryKey: ['listings', params],
    queryFn: () => xanoAPI.getListings(params),
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 3,
    retryDelay: 1000,
  });
};

export const useListing = (id: number) => {
  return useQuery({
    queryKey: ['listing', id],
    queryFn: () => xanoAPI.getListing(id),
    enabled: !!id,
  });
};

export const useCreateListing = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (listing: Omit<Listing, 'id' | 'created_at'>) => 
      xanoAPI.createListing(listing),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['listings'] });
    },
  });
};

export const useUpdateListing = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, listing }: { id: number; listing: Partial<Listing> }) =>
      xanoAPI.updateListing(id, listing),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ['listings'] });
      queryClient.invalidateQueries({ queryKey: ['listing', id] });
    },
  });
};

export const useDeleteListing = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (id: number) => xanoAPI.deleteListing(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['listings'] });
    },
  });
}; 