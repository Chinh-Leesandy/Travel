import { axiosInstance } from '../../libs/services/initApiLocal'
import { Comment } from '../../types/comment/Comment'
export const ApiComment = {
  addComment: async (blogId: string, comment: Comment) => {
    try {
      const res = await axiosInstance.post(`blogs/${blogId}/comments`, comment)
      return res.data
    } catch (error) {
      console.error('Error adding comment:', error)
      throw error
    }
  },
  getAllComments: async (blogId: string) => {
    try {
      const res = await axiosInstance.get(`blogs/${blogId}/comments`)
      return res.data
    } catch (error) {
      console.error('Error fetching comments:', error)
      throw error
    }
  }
}