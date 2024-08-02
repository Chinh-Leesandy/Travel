import React from 'react'
import { useAllCities } from '../../../hooks/city/useAllCites'
import { City } from '../../../types/city/City'
import Loading from '../../ui/loading/Loading'
import { useNavigate } from 'react-router-dom'

const ListCity: React.FC = () => {
  const { data, isLoading, isError } = useAllCities()
  const navigate = useNavigate()
  return (
    <div className='m-20'>
      {isLoading ? (
        <Loading />
      ) : (
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4'>
          {data.map((city: City) => (
            <div key={city.id}>
              <div
                className={`city relative flex flex-col justify-end overflow-hidden rounded-2xl px-8 pt-40 max-w-sm max-h-80 mx-auto mt-5 border-2 border-transparent origin-center hover:scale-105 hover:border-red-600 transition duration-500`}
                onClick={() => navigate(`/services/city/${city.id}`)}
              >
                <img src={city.preview} alt={city.name} className='absolute inset-0 h-full w-full object-cover' />
                <h3 className='z-10 mt-3 text-xl font-bold text-white'>{city.name}</h3>
                <div className='z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300 mb-3'>
                  {city.itemsCount} Điểm đến
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ListCity
