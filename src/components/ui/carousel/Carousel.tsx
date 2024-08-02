import React, { useState } from 'react'

interface CarouselProps {
  items: { id: string; img: string; name: string; description: string }[]
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <div className='relative max-w-2xl mx-auto'>
      <div className='overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96'>
        <div
          className='flex transition-transform duration-700'
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item) => (
            <div key={item.id} className='relative flex-shrink-0 w-full h-full flex items-center justify-center gap-3'>
              <img src={item.img} alt={item.name} className='w-1/2 h-60 object-cover rounded-md hover:scale-105' />
              <div className='w-1/2 text-left flex flex-col justify-center'>
                <h2 className='text-2xl font-bold  mb-2'>{item.name}</h2>
                <p className='text-lg '>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button type='button' className='absolute top-1/2 left-0 transform -translate-y-1/2 p-2' onClick={handlePrev}>
          <svg
            className='w-6 h-6 text-primary'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 19l-7-7 7-7'></path>
          </svg>
        </button>
        <button type='button' className='absolute top-1/2 right-0 transform -translate-y-1/2 p-2' onClick={handleNext}>
          <svg
            className='w-6 h-6 text-primary'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7'></path>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Carousel
