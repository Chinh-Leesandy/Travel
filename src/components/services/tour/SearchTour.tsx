import React, { useState } from 'react'
import Button from '../../ui/button/Button'

const SearchTour: React.FC = () => {
  const [city, setCity] = useState<string>()
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Xử lý logic tìm kiếm ở đây
    console.log('Searching for city:', city)
  }
  return (
    <>
      <div className='search-tour-container'>
        <form onSubmit={handleSearch} className='flex flex-col items-center gap-2'>
          <p className='text-xl py-2 text-white'>Do you want tour and active by city ?</p>
          <div className='flex items-center gap-2'>
            <input
              type='text'
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder='Enter city name'
              className='border border-gray-300 p-2 rounded-md'
            />
            <Button type='submit'>Search</Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default SearchTour
