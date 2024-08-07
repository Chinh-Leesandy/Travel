import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { amenities, Amenity } from '../../../types/hotel/Amenities'
import { SearchHotel } from '../../../types/hotel/SearchHotel'
import Button from '../../ui/button/Button'
import { Select } from 'antd'
const FormHotelSearch: React.FC = () => {
  const [searchHotel, setSearchHotel] = useState<SearchHotel>({
    city: '',
    radius: 1,
    radiusUnit: 'KM',
    amenities: []
  })

  const navigate = useNavigate()

  const handleAmenitiesChange = (selectedValues: string[]) => {
    setSearchHotel((prevState) => ({
      ...prevState,
      amenities: selectedValues
    }))
  }
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const queryParams = new URLSearchParams({
      city: searchHotel.city,
      radius: searchHotel.radius.toString(),
      radiusUnit: searchHotel.radiusUnit,
      amenities: searchHotel.amenities?.join(',') ?? ''
    }).toString()
    navigate(`/services/hotel?${queryParams}`)
  }
  return (
    <form onSubmit={handleSubmit} className='p-3'>
      <div className='mb-4 flex gap-8 items-center'>
        <label className='block text-sm font-semibold mb-2' htmlFor='city'>
          City:
        </label>
        <input
          type='text'
          id='city'
          name='city'
          value={searchHotel.city}
          onChange={(e) => setSearchHotel({ ...searchHotel, city: e.target.value })}
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
      </div>
      <div className='mb-4 flex'>
        <label className='block text-sm font-semibold mb-2' htmlFor='radius'>
          Radius (KM):
        </label>
        <input
          type='number'
          id='radius'
          name='radius'
          value={searchHotel.radius}
          onChange={(e) => setSearchHotel({ ...searchHotel, radius: Number(e.target.value) })}
          className='shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
      </div>
      <div className='mb-4 flex gap-2 items-center'>
        <label className='block text-sm font-bold mb-2' htmlFor='amenities'>
          Amenities:
        </label>
        <Select
          mode='multiple'
          options={amenities.map((item: Amenity) => ({
            value: item.value,
            label: item.label
          }))}
          onChange={handleAmenitiesChange}
          className='w-full'
        />
      </div>
      <div className='flex justify-center'>
        <Button type='submit'>Search Hotels</Button>
      </div>
    </form>
  )
}

export default FormHotelSearch
