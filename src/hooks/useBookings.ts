import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { xanoAPI, Booking } from '../lib/api';

export const useBookings = (userId?: number) => {
  return useQuery({
    queryKey: ['bookings', userId],
    queryFn: () => xanoAPI.getBookings(userId),
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
};

export const useBooking = (id: number) => {
  return useQuery({
    queryKey: ['booking', id],
    queryFn: () => xanoAPI.getBooking(id),
    enabled: !!id,
  });
};

export const useCreateBooking = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (booking: Omit<Booking, 'id' | 'created_at'>) => 
      xanoAPI.createBooking(booking),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookings'] });
    },
  });
};

export const useUpdateBooking = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, booking }: { id: number; booking: Partial<Booking> }) =>
      xanoAPI.updateBooking(id, booking),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ['bookings'] });
      queryClient.invalidateQueries({ queryKey: ['booking', id] });
    },
  });
};

export const useDeleteBooking = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (id: number) => xanoAPI.deleteBooking(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookings'] });
    },
  });
}; 