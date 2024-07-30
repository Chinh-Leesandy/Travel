import { useEffect, useState } from 'react' // Đảm bảo đường dẫn đúng
import { Blog } from '../../types/blogs/Blog' // Đảm bảo đường dẫn đúng
import { ApiBlogs } from '../../features/blog/ApiBlogs'

const ListBlogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const fetchedBlogs = await ApiBlogs.getAllBlog()
        setBlogs(fetchedBlogs)
      } catch (error) {
        setError('Failed to load blogs.')
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  if (loading) {
    return <p className='text-center'>Loading...</p>
  }

  if (error) {
    return <p className='text-center text-red-500'>{error}</p>
  }

  return (
    <div className='p-4'>
      <h1 className='text-xl font-bold mb-4'>Danh sách các bài viết</h1>
      {blogs.length === 0 ? (
        <p className='text-center'>Không có bài viết nào.</p>
      ) : (
        <ul className='space-y-4'>
          {blogs.map((blog) => (
            <li key={blog.id} className='border p-4 rounded shadow-md'>
              <h2 className='text-lg font-semibold'>{blog.title}</h2>
              <img src={blog.image} alt={blog.title} className='w-full h-40 object-cover mt-2 mb-2' />
              <p className='text-gray-700'>{blog.content.substring(0, 100)}...</p>
              <p className='text-gray-500'>Rating: {blog.rating}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ListBlogs
