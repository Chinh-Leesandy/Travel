import { useMutation, useQueryClient} from '@tanstack/react-query'
import { Blog } from '../../types/blogs/Blog'
import { ApiBlogs } from '../../features/blog/ApiBlogs'

export const useAddBlog = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['AddBlog'],
    mutationFn: (blog: Blog) => ApiBlogs.createBlog(blog),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['AllBlogs'] })
    },
    onError: (error) => {
      console.error('Error adding blog:', error)
    }
  })
}
