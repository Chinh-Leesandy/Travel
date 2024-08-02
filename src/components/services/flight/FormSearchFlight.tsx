import React, { ChangeEvent, FormEvent, useState } from 'react'
import { SearchFlight } from '../../../types/flight/SearchFlight'
import { useNavigate } from 'react-router-dom'
import Button from '../../ui/button/Button'
import TravelClassItem, { TravelClass } from '../../../types/flight/TravelClass'

const FormSearchFlight: React.FC = () => {
  const [searchFlight, setSearchFlight] = useState<SearchFlight>({
    originCity: '',
    destinationCity: '',
    departureDate: '',
    returnDate: '',
    adults: 1,
    children: 0,
    travelClass: 'ECONOMY'
  })
  const [isOneWay, setIsOneWay] = useState<boolean>(true)
  const navigate = useNavigate()

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setSearchFlight((prevState) => ({
      ...prevState,
      [name]: name === 'adults' || name === 'children' ? Number(value) : value
    }))
  }
  const searchFlightParams: Record<string, string> = {
    originCity: searchFlight.originCity,
    destinationCity: searchFlight.destinationCity,
    departureDate: searchFlight.departureDate,
    returnDate: searchFlight.returnDate,
    adults: searchFlight.adults.toString(),
    children: searchFlight.children?.toString() ?? '',
    travelClass: searchFlight.travelClass
  }
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams(searchFlightParams).toString()
    navigate(`/services/flight?${params}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-4 flex gap-3'>
        <div className='flex items-center gap-1'>
          <input
            type='radio'
            id='oneWay'
            name='oneWay'
            value='oneWay'
            checked={isOneWay}
            onChange={() => setIsOneWay(true)}
            className='checked:bg-blue-500'
          />
          <label className='block text-sm font-bold' htmlFor='oneWay'>
            One Way
          </label>
        </div>
        <div className='flex items-center gap-1'>
          <input
            type='radio'
            id='roundTrip'
            name='roundTrip'
            value='roundTrip'
            checked={!isOneWay}
            onChange={() => setIsOneWay(false)}
          />
          <label className='block text-sm font-bold' htmlFor='roundTrip'>
            Round Trip
          </label>
        </div>
      </div>
      <div className='mb-4 flex'>
        <div className='mr-4 w-1/2'>
          <label className='block text-sm font-bold mb-2' htmlFor='originCity'>
            From
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
            id='originCity'
            name='originCity'
            type='text'
            placeholder='City or Airport'
            value={searchFlight.originCity}
            onChange={handleChange}
          />
        </div>
        <div className='mr-4 w-1/2'>
          <label className='block text-sm font-bold mb-2' htmlFor='destinationCity'>
            To
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
            id='destinationCity'
            name='destinationCity'
            type='text'
            placeholder='City or Airport'
            value={searchFlight.destinationCity}
            onChange={handleChange}
          />
        </div>
        <div className='mr-4 w-1/2'>
          <label className='block text-sm font-bold mb-2' htmlFor='departureDate'>
            Departure Date
          </label>
          <input
            value={searchFlight.departureDate}
            onChange={handleChange}
            type='date'
            className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
            id='departureDate'
            name='departureDate'
          />
        </div>
        {!isOneWay && (
          <div className='w-1/2'>
            <label className='block text-sm font-bold mb-2' htmlFor='returnDate'>
              Return Date
            </label>
            <input
              value={searchFlight.returnDate}
              onChange={handleChange}
              type='date'
              className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
              id='returnDate'
              name='returnDate'
            />
          </div>
        )}
      </div>
      <div className='mb-4 flex'>
        <div className='mr-4 w-1/2'>
          <label className='block text-sm font-bold mb-2' htmlFor='adults'>
            Adults
          </label>
          <input
            value={searchFlight.adults}
            onChange={handleChange}
            type='number'
            className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
            id='adults'
            name='adults'
          />
        </div>
        <div className='mr-4 w-1/2'>
          <label className='block text-sm font-bold mb-2' htmlFor='children'>
            Children
          </label>
          <input
            value={searchFlight.children}
            onChange={handleChange}
            type='number'
            className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
            id='children'
            name='children'
          />
        </div>
        <div className='mr-4 w-1/2'>
          <label className='block text-sm font-bold mb-2' htmlFor='travelClass'>
            Travel Class:
          </label>
          <select
            value={searchFlight.travelClass}
            onChange={handleChange}
            className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
            name='travelClass'
          >
            {TravelClass.map((item: TravelClassItem) => (
              <option key={item.id} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className='w-full flex justify-center'>
        <Button type='submit'>Search Flights</Button>
      </div>
    </form>
  )
}

export default FormSearchFlight
