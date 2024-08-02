import React from 'react'
import { useParams } from 'react-router-dom'
import { useCitiesById } from '../../../hooks/city/useCitiesById'
import Loading from '../../ui/loading/Loading'
import Carousel from '../../ui/carousel/Carousel'

const CityDetail: React.FC = () => {
  const params = useParams()
  const id = params.id
  const { data, isLoading, isError } = useCitiesById(id as string)

  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    return <div>Error loading city details</div>
  }

  return (
    <div className='m-20'>
      <div className='information bg-white shadow-md rounded-lg p-6'>
        <div className='flex flex-col md:flex-row items-center'>
          <img src={data.preview} alt={data.name} className='rounded-md w-full md:w-1/2 lg:w-1/3 object-cover' />
          <div className='info md:ml-8 mt-6 md:mt-0'>
            <h1 className='text-2xl capitalize py-2'>{data.name}</h1>
            <p className='text-gray-500'>Với {data.itemsCount} điểm đến</p>
            <p className='mt-4'>
              <span className='font-semibold'>Giới thiệu về thành phố {data.name}:</span> {data.information.description}
            </p>
            <p className='mt-4'>
              <span className='font-semibold'>Thời gian tốt nhất khi đến thăm thành phố {data.name}:</span>{' '}
              {data.information.bestTime}
            </p>
          </div>
        </div>
        <div className='place'>
          <h3 className='text-xl font-semibold my-6'>Điểm đến nổi bật</h3>
          <Carousel items={data.information.famousPlace} />
        </div>
        <div className='food'>
          <h3 className='text-xl font-semibold my-6'>Món ăn địa phương</h3>
          <Carousel items={data.information.famousFood} />
        </div>
      </div>
    </div>
  )
}

export default CityDetail
