import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { xanoAPI, Wishlist, WishlistItem } from '../lib/api';

export const useWishlists = (userId?: number) => {
  return useQuery({
    queryKey: ['wishlists', userId],
    queryFn: () => xanoAPI.getWishlists(userId),
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
};

export const useWishlist = (id: number) => {
  return useQuery({
    queryKey: ['wishlist', id],
    queryFn: () => xanoAPI.getWishlist(id),
    enabled: !!id,
  });
};

export const useWishlistItems = (wishlistId: number) => {
  return useQuery({
    queryKey: ['wishlist-items', wishlistId],
    queryFn: () => xanoAPI.getWishlistItems(wishlistId),
    enabled: !!wishlistId,
  });
};

export const useCreateWishlist = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (wishlist: Omit<Wishlist, 'id' | 'created_at'>) => 
      xanoAPI.createWishlist(wishlist),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['wishlists'] });
    },
  });
};

export const useUpdateWishlist = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, wishlist }: { id: number; wishlist: Partial<Wishlist> }) =>
      xanoAPI.updateWishlist(id, wishlist),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ['wishlists'] });
      queryClient.invalidateQueries({ queryKey: ['wishlist', id] });
    },
  });
};

export const useDeleteWishlist = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (id: number) => xanoAPI.deleteWishlist(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['wishlists'] });
    },
  });
};

export const useAddToWishlist = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ wishlistId, listingId }: { wishlistId: number; listingId: number }) =>
      xanoAPI.addToWishlist(wishlistId, listingId),
    onSuccess: (_, { wishlistId }) => {
      queryClient.invalidateQueries({ queryKey: ['wishlist-items', wishlistId] });
    },
  });
};

export const useRemoveFromWishlist = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (wishlistItemId: number) => xanoAPI.removeFromWishlist(wishlistItemId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['wishlist-items'] });
    },
  });
}; 