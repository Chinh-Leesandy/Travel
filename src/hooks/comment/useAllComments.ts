import { useQuery } from '@tanstack/react-query'
import { ApiComment } from '../../features/comment/ApiComment'

export const useAllComments = (blogId: string) => {
  return useQuery({
    queryKey: ['allComments', blogId],
    queryFn: () => ApiComment.getAllComments(blogId),
    enabled: !!blogId,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchInterval: false
  })
}
