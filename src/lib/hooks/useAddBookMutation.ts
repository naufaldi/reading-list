import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addBook } from '../utils/api-request';

export function useAddBookMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addBook,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['book-list'] });
    },
    onError: (error) => {
      console.error('Error adding book:', error);
    },
  });
}
