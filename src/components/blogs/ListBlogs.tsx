import { Blog } from '../../types/blogs/Blog'
import Loading from '../ui/loading/Loading'
import useAllBlogs from '../../hooks/blog/useAllBlogs'

const ListBlogs: React.FC = () => {
  const { data, isLoading, isError } = useAllBlogs()
  if (isLoading) {
    return (
      <p className='text-center'>
        <Loading />
      </p>
    )
  }
  if (isError) {
    return <p className='text-center text-red-500'>error</p>
  }

  return (
    <div className='p-4'>
      {data.length === 0 ? (
        <p className='text-center'>Không có bài viết nào.</p>
      ) : (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {data.map((blog: Blog) => (
            <div key={blog.id} className='border p-4 rounded shadow-md hover:shadow-lg transition-shadow'>
              <div className='overflow-hidden'>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className='w-full h-40 object-cover mt-2 mb-2 transform transition-transform duration-500 hover:scale-105'
                />
              </div>
              <h2 className='text-lg font-semibold'>{blog.title}</h2>
              <p className='text-gray-500'>Rating: {blog.rating}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ListBlogs
