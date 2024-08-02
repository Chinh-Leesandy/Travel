import { useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'
import Button from '../ui/button/Button'
import CustomModal from '../ui/modal/Modal'
import Loading from '../ui/loading/Loading'
import { useAddBlog } from '../../hooks/blog/useAddBlog'

const AddBlogs: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [blog, setBlog] = useState({
    id: '',
    title: '',
    image: '',
    touristAttractions: '',
    visitTime: '',
    localCuisine: '',
    rating: ''
  })
  const [error, setError] = useState<string | null>(null)
  const { mutate, isLoading } = useAddBlog()
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setBlog({ ...blog, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    try {
      await mutate(blog)
      onClose()
    } catch (err) {
      setError('Failed to create blog post')
    }
  }

  return (
    <>
      <div className='flex justify-between items-center w-full px-6 py-4'>
        <h1 className='text-xl font-bold mb-4'>Danh sách các bài viết</h1>
        <Button type='button' onClick={onOpen}>
          Post Blogs
        </Button>
      </div>
      <CustomModal
        isOpen={isOpen}
        onClose={onClose}
        title='Create a New Blog'
        footer={
          <div className='flex justify-around items-center w-full p-4'>
            <Button type='button' onClick={onClose}>
              Cancel
            </Button>
            <Button type='submit' form='blog-form' disabled={isLoading}>
              {isLoading ? <Loading /> : 'Post'}
            </Button>
          </div>
        }
      >
        <div className='p-4'>
          {error && <p className='text-red-500 mb-4'>{error}</p>}
          <form id='blog-form' onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label className='block text-sm font-medium mb-1' htmlFor='title'>
                Title
              </label>
              <input
                id='title'
                name='title'
                type='text'
                value={blog.title}
                onChange={handleInputChange}
                className='border border-gray-300 rounded p-2 w-full'
                required
              />
            </div>
            <div className='mb-4'>
              <label className='block text-sm font-medium mb-1' htmlFor='image'>
                Image URL
              </label>
              <input
                id='image'
                name='image'
                type='text'
                value={blog.image}
                onChange={handleInputChange}
                className='border border-gray-300 rounded p-2 w-full'
                required
              />
            </div>
            <div className='mb-4'>
              <label className='block text-sm font-medium mb-1' htmlFor='touristAttractions'>
                Tourist Attractions
              </label>
              <textarea
                id='touristAttractions'
                name='touristAttractions'
                value={blog.touristAttractions}
                onChange={handleInputChange}
                className='border border-gray-300 rounded p-2 w-full'
                rows={4}
                required
              />
            </div>
            <div className='mb-4'>
              <label className='block text-sm font-medium mb-1' htmlFor='visitTime'>
                Best Time to Visit
              </label>
              <textarea
                id='visitTime'
                name='visitTime'
                value={blog.visitTime}
                onChange={handleInputChange}
                className='border border-gray-300 rounded p-2 w-full'
                rows={4}
                required
              />
            </div>
            <div className='mb-4'>
              <label className='block text-sm font-medium mb-1' htmlFor='localCuisine'>
                Local Cuisine
              </label>
              <textarea
                id='localCuisine'
                name='localCuisine'
                value={blog.localCuisine}
                onChange={handleInputChange}
                className='border border-gray-300 rounded p-2 w-full'
                rows={4}
                required
              />
            </div>
            <div className='mb-4'>
              <label className='block text-sm font-medium mb-1' htmlFor='rating'>
                Rating
              </label>
              <input
                id='rating'
                name='rating'
                type='text'
                value={blog.rating}
                onChange={handleInputChange}
                className='border border-gray-300 rounded p-2 w-full'
                required
              />
            </div>
          </form>
        </div>
      </CustomModal>
    </>
  )
}

export default AddBlogs
