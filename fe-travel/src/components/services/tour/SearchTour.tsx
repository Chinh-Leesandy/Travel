import React, { useState } from 'react'
import Button from '../../ui/button/Button'
import { useNavigate } from 'react-router-dom'
const SearchTour: React.FC = () => {
  const [city, setCity] = useState<string>()
  const navigate = useNavigate()
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    navigate(`/services/tours?city=${city}`)
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
