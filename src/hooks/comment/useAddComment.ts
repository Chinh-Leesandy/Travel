import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Comment } from './../../types/comment/Comment'
import { ApiComment } from '../../features/comment/ApiComment'
export const useAddComment = (blogId: string, comment: Comment) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['comment', blogId],
    mutationFn: () => ApiComment.addComment(blogId, comment),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['allComments', blogId] })
    },
    onError: (error) => {
      console.error('Error adding blog:', error)
    }
  })
}