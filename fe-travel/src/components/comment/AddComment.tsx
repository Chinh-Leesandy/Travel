import React, { useState } from 'react'
import { useDisclosure } from '@chakra-ui/react'
import Button from '../ui/button/Button'
import CustomModal from '../ui/modal/Modal'
import Loading from '../ui/loading/Loading'
import { Comment } from '../../types/comment/Comment'
import { useAddComment } from '../../hooks/comment/useAddComment'
import { useAppSelector } from '../../app/store/hooks'
import { useNavigate, useLocation } from 'react-router-dom'
import { errorToast, successToast } from '../../utils/toast'
const AddComment: React.FC<{ blogId: string }> = ({ blogId }) => {
  const location = useLocation()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [comment, setComment] = useState<Comment>({
    userName: '',
    userAvatar: '',
    content: '',
    createdAt: new Date().toISOString()
  })
  const user = useAppSelector((state) => state.auth.Iuser)
  const navigate = useNavigate()
  const handleOpenAdd = () => {
    if (user) {
      setComment({
        ...comment,
        userName: user.firstName + ' ' + user.lastName,
        userAvatar: user.avatar || ''
      })
      onOpen()
    } else navigate('/auth/login', { state: { from: location } })
  }
  const { mutate } = useAddComment(blogId, comment)
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError(null)
    setIsLoading(true)
    try {
      await mutate()
      successToast('Add comment successfully')
      setIsLoading(false)
      onClose()
    } catch (error) {
      setError(error as string)
      errorToast(error as string)
    }
  }

  return (
    <>
      <div className='flex justify-between items-center w-full px-6 py-4 mt-6'>
        <h1 className='text-xl font-bold mb-4'>Danh sách các bình luận</h1>
        <Button type='button' onClick={handleOpenAdd}>
          Add Comment
        </Button>
      </div>
      <CustomModal
        isOpen={isOpen}
        onClose={onClose}
        title='Add new comment'
        footer={
          <div className='flex justify-around items-center w-full p-4'>
            <Button type='button' onClick={onClose}>
              Cancel
            </Button>
            <Button type='submit' form='comment-form' disabled={isLoading}>
              {isLoading ? <Loading /> : 'Save'}
            </Button>
          </div>
        }
      >
        <div className='p-4'>
          {error && <p className='text-red-500 mb-4'>{error}</p>}
          <form id='comment-form' onSubmit={handleSubmit}>
            <textarea
              value={comment.content}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setComment({ ...comment, content: e.target.value })
              }
              placeholder='Nhập bình luận của bạn...'
              className='w-full h-32 p-2 border border-gray-300 rounded mb-4'
            />
          </form>
        </div>
      </CustomModal>
    </>
  )
}

export default AddComment
