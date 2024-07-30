import { axiosInstance } from "../../libs/services/initApiLocal";
import { Blog } from "../../types/blogs/Blog";

export const ApiBlogs = {
  createBlog: async (blog: Blog) => {
    try {
      const res = await axiosInstance.post(`blogs`, blog)
      return res.data
    } catch (error) {
      console.error('create blogs fails', error)
      throw error
    }
  },
  getAllBlog: async () => {
    try {
      const res = await axiosInstance.get(`blogs`)
      return res.data
    } catch (error) {
      console.error('get all blogs fails', error)
      throw error
    }
  },
  getBlogByID: async (id: string) => {
    try {
      const res = await axiosInstance.get(`blogs/${id}`)
      return res.data
    } catch (error) {
      console.error('get all blogs fails', error)
      throw error
    }
  }
}