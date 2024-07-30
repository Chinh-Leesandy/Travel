import { useDisclosure } from '@chakra-ui/react'
import { useState } from 'react'
import Button from '../ui/button/Button'
import CustomModal from '../ui/modal/Modal'
import { ApiBlogs } from '../../features/blog/ApiBlogs'

const AddBlogs: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [title, setTitle] = useState<string>('')
  const [image, setImage] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [rating, setRating] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      await ApiBlogs.createBlog({ id: '', title, image, content, rating })
      onClose()
    } catch (err) {
      setError('Failed to create blog post')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Button type='button' onClick={onOpen}>
        Post Blogs
      </Button>
      <CustomModal
        isOpen={isOpen}
        onClose={onClose}
        title='Create a New Blog'
        footer={
          <div className='flex justify-around items-center w-full p-4'>
            <Button type='button' onClick={onClose}>
              Cancel
            </Button>
            <Button type='submit' onClick={(e) => handleSubmit(e)} disabled={loading}>
              {loading ? 'Posting...' : 'Post'}
            </Button>
          </div>
        }
      >
        <div className='p-4'>
          {error && <p className='text-red-500 mb-4'>{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label className='block text-sm font-medium mb-1' htmlFor='title'>
                Title
              </label>
              <input
                id='title'
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
                type='text'
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className='border border-gray-300 rounded p-2 w-full'
                required
              />
            </div>
            <div className='mb-4'>
              <label className='block text-sm font-medium mb-1' htmlFor='content'>
                Content
              </label>
              <textarea
                id='content'
                value={content}
                onChange={(e) => setContent(e.target.value)}
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
                type='text'
                value={rating}
                onChange={(e) => setRating(e.target.value)}
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
