import BlogDetail from '../components/blogs/BlogDetail'
import BgBlogs from '../assets/Bg_Blogs.png'
const BlogDetailPage = () => {
  return (
    <>
      <div className='relative'>
        <img src={BgBlogs} alt='bg_Home' className='w-full h-full object-cover' />
        <div className='absolute top-0 left-0 flex justify-center items-center h-full w-full'>
          <h1 className='text-white text-4xl capitalize py-5'>Blogs</h1>
        </div>
      </div>
      <BlogDetail />
    </>
  )
}

export default BlogDetailPage
