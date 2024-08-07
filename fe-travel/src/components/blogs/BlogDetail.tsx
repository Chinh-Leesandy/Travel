import { useParams } from 'react-router-dom'
import { useBlogById } from '../../hooks/blog/useBlogById'
import Loading from '../ui/loading/Loading'
import AddComment from '../comment/AddComment'
import ListComment from '../comment/ListComment'
const BlogDetail: React.FC = () => {
  const params = useParams()
  const id = params.id
  const { data, isLoading, isError } = useBlogById(id as string)
  if (isLoading) {
    return <Loading />
  }
  if (isError) {
    return <p className='text-center text-red-500'>error</p>
  }
  return (
    <div className='mx-20'>
      <h2 className='text-2xl text-center mb-6'>{data.title}</h2>
      <img
        src={data.image}
        alt={data.title}
        className='rounded-md w-1/2 mx-auto hover:scale-105 shadow-md shadow-slate-300'
      />
      <div className='mt-6 mx-36'>
        <h3 className='text-xl font-semibold'>Thời gian tham quan</h3>
        <p className='whitespace-pre-line leading-relaxed'>{data.visitTime}</p>
      </div>
      <div className='mt-6 mx-36'>
        <h3 className='text-xl font-semibold'>Địa điểm nổi tiếng</h3>
        <p className='whitespace-pre-line leading-relaxed'>{data.touristAttractions}</p>
      </div>
      <div className='mt-6 mx-36'>
        <h3 className='text-xl font-semibold'>Đặc sản địa phương</h3>
        <p className='whitespace-pre-line leading-relaxed'>{data.localCuisine}</p>
      </div>
      <AddComment blogId={id as string} />
      <ListComment blogId={id as string} />
    </div>
  )
}

export default BlogDetail
