import React, { useState } from 'react'
import { budgets, Budget } from '../../types/ai/Budget'
import { types, Type } from '../../types/ai/Type'
import { Schedule as ISchedule } from '../../types/ai/Schedule'
import Button from '../ui/button/Button'
import { GoogleGenerativeAI } from '@google/generative-ai'
import ResultAI from './ResultAI'

const apiKey = import.meta.env.VITE_GEMINIAI
const genAI = new GoogleGenerativeAI(apiKey)
const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-pro'
})

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: 'application/json'
}

const Schedule: React.FC = () => {
  const [iSchedule, setISchedule] = useState<ISchedule>({
    address: '',
    time: '',
    budget: '',
    type: ''
  })
  const [responseText, setResponseText] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setISchedule({ ...iSchedule, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: 'user',
          parts: [
            {
              text: `Create a detailed travel plan to ${iSchedule.address} with ${iSchedule.type} in ${iSchedule.budget} budget in ${iSchedule.time} days for me based on the following specifications:
                    1. **Flight Options**: 
                      - Provide a list of flight options with the following properties:
                        - 'FlightName': The name of the flight.
                        - 'FlightTime': Time the plane takes off.
                        - 'Price': The cost of the flight.

                    2. **Hotel Options**: 
                      - Provide a list of hotel options with the following properties:
                        - 'HotelName': The name of the hotel.
                        - 'HotelAddress': The address of the hotel.
                        - 'Price': The cost per night.
                        - 'Rating': The rating of the hotel.

                    3. **Itinerary Suggestions**:
                      - Provide a detailed itinerary for each day with the following properties:
                        - 'Day': The day number or name.
                        - 'DayDescription': A description of what will be done on this day.
                        - 'BestTimeToVisit': The best time to visit each location.
                        - 'Place': A list of places to visit with the following properties and min 4 options:
                          - 'PlaceName': The name of the place.
                          - 'LocationDetails': Detailed location information.
                          - 'TicketPrice': The cost of a ticket for this place.
                          - 'TimeToVisit': The estimated time to spend at this place.
                          - 'TravelTimeToLocation': The estimated travel time to reach this place.

                    Ensure the output is in the following JSON format:


                    {
                      "FlightOptions": [
                        {
                          "FlightName": "string",
                          "FlightTime": "string",
                          "Price": "string"
                        }
                      ],
                      "HotelOptions": [
                        {
                          "HotelName": "string",
                          "HotelAddress": "string",
                          "Price": "string",
                          "Rating": "string"
                        }
                      ],
                      "ItinerarySuggestions": [
                        {
                          "Day": "string",
                          "DayDescription": "string",
                          "BestTimeToVisit": "string",
                          "Place": [
                            {
                              "PlaceName": "string",
                              "LocationDetails": "string",
                              "TicketPrice": "string",
                              "TimeToVisit": "string",
                              "TravelTimeToLocation": "string"
                            }
                          ]
                        }
                      ] 
                    }
              `
            }
          ]
        }
      ]
    })

    try {
      const result = await chatSession.sendMessage('')
      const responseText = await result.response.text()
      setResponseText(responseText)
    } catch (error) {
      console.error('Error generating travel plan:', error)
      setError('Failed to generate travel plan. Please try again.')
    } finally {
      setLoading(false)
    }
  }
  console.log(responseText)
  return (
    <>
      <div className='mt-6 mx-32'>
        <h2 className='font-bold text-2xl'>Do you want to travel but don't have a plan?</h2>
        <p className='mt-3 text-gray-400 text-lg'>Let AI help you create travel plans.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='mt-10 mx-32'>
          <h2 className='my-3 font-medium'>What is your destination of choice?</h2>
          <input
            type='text'
            name='address'
            className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 ring-1 ring-inset ring-gray-300'
            placeholder='Enter the destination you want to visit'
            value={iSchedule.address}
            onChange={handleChange}
          />
        </div>
        <div className='mt-10 mx-32'>
          <h2 className='my-3 font-medium'>How many days are you planning your trip?</h2>
          <input
            type='text'
            name='time'
            className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300'
            placeholder='Enter the duration of your trip'
            value={iSchedule.time}
            onChange={handleChange}
          />
        </div>
        <div className='mt-10 mx-32'>
          <h2 className='my-3 font-medium'>What is your budget?</h2>
          <div className='grid grid-cols-3 gap-5 mt-5'>
            {budgets.map((budget: Budget) => (
              <div
                key={budget.id}
                tabIndex={0}
                className='p-3 border cursor-pointer rounded-lg hover:shadow-lg focus:border-gray-500 focus:border-2'
                onClick={() => setISchedule({ ...iSchedule, budget: budget.name })}
              >
                <h2 className='text-4xl mb-3'>{budget.img}</h2>
                <h2 className='text-lg font-bold'>{budget.name}</h2>
                <p className='text-sm text-gray-500'>{budget.des}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='mt-10 mx-32'>
          <h2 className='my-3 font-medium'>Who do you plan on traveling with on your next adventure?</h2>
          <div className='grid grid-cols-4 gap-5 mt-5'>
            {types.map((type: Type) => (
              <div
                key={type.id}
                tabIndex={0}
                className='p-3 border cursor-pointer rounded-lg hover:shadow-lg focus:border-gray-500 focus:border-2'
                onClick={() => setISchedule({ ...iSchedule, type: type.name })}
              >
                <h2 className='text-4xl mb-3'>{type.img}</h2>
                <h2 className='text-lg font-bold'>{type.name}</h2>
                <p className='text-sm text-gray-500'>{type.des}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='flex justify-center mt-6'>
          <Button type='submit' disabled={loading}>
            {loading ? 'Creating Plan...' : 'Create Plan'}
          </Button>
        </div>
      </form>
      {error && <p className='mt-4 text-center text-red-500'>{error}</p>}
      {responseText && <ResultAI responseText={responseText} />}
    </>
  )
}

export default Schedule
