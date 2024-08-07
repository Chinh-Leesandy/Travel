import React from 'react'
import { FlightOption } from '../../types/plan/Plan'
import { HotelOption } from '../../types/plan/Plan'
import { ItineraryByDay } from '../../types/plan/Plan'
import { PlaceDetails } from '../../types/plan/Plan'
interface ResultAiProps {
  responseText: string
}

const ResultAi: React.FC<ResultAiProps> = ({ responseText }) => {
  const data = JSON.parse(responseText)
  console.log(data)
  return (
    <div className='mt-10 mx-32'>
      <h2 className='text-xl font-bold text-center'>Generated Travel Plan</h2>
      <h2 className='text-lg font-bold mt-6'>Flight Options</h2>
      <div className='mt-4 bg-gray-100 p-4 rounded-lg grid grid-cols-3 gap-5'>
        {data?.FlightOptions.map((flight: FlightOption, index: number) => (
          <div key={index} className='p-4 border rounded-lg shadow-sm'>
            <img
              src='https://i.pinimg.com/236x/05/63/45/056345307771dee34e8fc6e6bf62fe62.jpg'
              alt='flight-image'
              className='rounded-md w-full h-60'
            />
            <h4 className='text-md font-bold'>{flight.FlightName}</h4>
            <p className='text-sm text-gray-600'>{flight.FlightTime}</p>
            <p className='text-lg font-semibold mt-2'>{flight.Price}</p>
          </div>
        ))}
      </div>
      <h2 className='text-lg font-bold mt-6'>Hotel Options</h2>
      <div className='mt-4 bg-gray-100 p-4 rounded-lg grid grid-cols-3 gap-5'>
        {data?.HotelOptions.map((hotel: HotelOption, index: number) => (
          <div key={index} className='p-4 border rounded-lg shadow-sm'>
            <img
              src='https://i.pinimg.com/236x/8a/d2/61/8ad2613a1ebe19d30039ea375d4e3143.jpg'
              alt='hotel-image'
              className='rounded-md w-full'
            />
            <h4 className='text-md font-bold'>{hotel.HotelName}</h4>
            <p className='text-sm text-gray-600'>{hotel.HotelAddress}</p>
            <div className='flex justify-between items-center px-2'>
              <p className='text-sm text-gray-600'>{hotel.Rating}</p>
              <p className='text-lg font-semibold mt-2'>{hotel.Price}</p>
            </div>
          </div>
        ))}
      </div>
      <h2 className='text-lg font-bold mt-6 mb-3'>Plan travel</h2>
      <div className='mt-4p-4 rounded-lg'>
        {data?.ItinerarySuggestions.map((plan: ItineraryByDay, index: number) => (
          <div key={index} className='p-4 border rounded-lg shadow-sm mb-6'>
            <h1 className='text-xl font-bold'>Day: {plan.Day}</h1>
            <h2 className='text-md font-bold'>{plan.DayDescription}</h2>
            <h2 className='text-md font-bold'>Best Time To Visit: {plan.BestTimeToVisit}</h2>
            <div className='mt-2 grid grid-cols-4 gap-5'>
              {plan?.Place.map((item: PlaceDetails, itemIndex: number) => (
                <div key={itemIndex} className='p-2 bg-white rounded-md shadow-sm mb-2'>
                  <img
                    src='https://i.pinimg.com/236x/9b/51/36/9b51366441d2160d6c5fbe530c485961.jpg'
                    alt='imgae-hotel'
                    className='rounded-md w-full'
                  />
                  <h3 className='text-md font-bold'>{item.PlaceName}</h3>
                  <p className='text-sm text-gray-600'>Address: {item.LocationDetails}</p>
                  <p className='text-sm text-gray-600'>Ticket Price: {item.TicketPrice}</p>
                  <p className='text-sm text-gray-600'>Time to Visit: {item.TimeToVisit}</p>
                  <p className='text-sm text-gray-600'>Travel Time: {item.TravelTimeToLocation}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ResultAi
