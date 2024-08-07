import { useAllComments } from '../../hooks/comment/useAllComments'
import { Comment } from '../../types/comment/Comment'
import Loading from '../ui/loading/Loading'

const ListComment: React.FC<{ blogId: string }> = ({ blogId }) => {
  const { data, isLoading, isError } = useAllComments(blogId)
  if (isLoading) {
    return <Loading />
  }
  if (isError) {
    return <p className='text-center text-red-500'>error</p>
  }
  console.log(data)
  return (
    <div className='comments-list mx-12'>
      {data && data.length > 0 ? (
        data.map((comment: Comment, index: number) => (
          <div key={index} className='comment shadow-md rounded-md shadow-slate-400 p-6 mb-3'>
            <div className='comment-header flex items-center gap-3'>
              <img src={comment.userAvatar} alt={comment.userName} className='rounded-full w-12' />
              <div className='info'>
                <h3 className='comment-author'>{comment.userName}</h3>
                <p className='comment-date'>{new Date(comment.createdAt).toLocaleString()}</p>
              </div>
            </div>
            <p className='comment-content mt-3'>{comment.content}</p>
          </div>
        ))
      ) : (
        <p className='text-center'>No comments yet.</p>
      )}
    </div>
  )
}

export default ListComment
