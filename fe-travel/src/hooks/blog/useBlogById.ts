import { useQuery } from '@tanstack/react-query'
import { ApiBlogs } from '../../features/blog/ApiBlogs'
export const useBlogById = (id: string) => {
  return useQuery({
    queryKey: ['Blog', id],
    queryFn: () => ApiBlogs.getBlogByID(id),
    enabled: !!id,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchInterval: false
  })
}