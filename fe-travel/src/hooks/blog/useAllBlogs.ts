import { useQuery } from '@tanstack/react-query'
import { ApiBlogs } from '../../features/blog/ApiBlogs'
const useAllBlogs = () => {
  return useQuery({
    queryKey: ['AllBlogs'],
    queryFn: () => ApiBlogs.getAllBlog(),
    staleTime: Infinity
  })
}

export default useAllBlogs