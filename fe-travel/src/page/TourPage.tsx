import React, { useState } from 'react'
import BgDetail from '../assets/Bg_Detail.png'
import { useSearchParams } from 'react-router-dom'
import useTourAndActive from '../hooks/tour/useTourAndActive'
import Loading from '../components/ui/loading/Loading'
import { Tour } from '../types/tour/Tour'
import { Rate } from 'antd'
import { useDisclosure } from '@chakra-ui/react'
import CustomModal from '../components/ui/modal/Modal'
import Button from '../components/ui/button/Button'
const TourPage: React.FC = () => {
  const [searchParams] = useSearchParams()
  const city = searchParams.get('city')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null)
  const { data, isError, isLoading } = useTourAndActive(city as string)
  if (isError) {
    return <h1>Error</h1>
  }
  const handleInformation = (item: Tour) => {
    setSelectedTour(item)
    onOpen()
  }
  return (
    <>
      <div className='relative'>
        <img src={BgDetail} alt='bg_Home' className='w-full h-full object-cover' />
        <div className='absolute top-0 left-0 flex justify-center items-center h-full w-full'>
          <h1 className='text-white text-4xl capitalize py-5'>Tour and Active</h1>
        </div>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className='grid grid-cols-4 gap-5 mt-10'>
            {data.slice(1, 13).map((item: Tour) => (
              <div className='flex px-3 py-3' key={item.id} onClick={() => handleInformation(item)}>
                <div className='max-w-sm rounded overflow-hidden shadow-lg'>
                  <img className='w-full h-72' src={item.pictures[0]} alt={item.name} />
                  <div className='px-6 py-4'>
                    <div className='font-bold text-xl mb-2 line-clamp-2'>{item.name}</div>
                    <div className='flex justify-between items-center'>
                      {(item.price && Object.keys(item.price).length === 0) || item.price.amount === '0.0' ? (
                        <p className='text-red-500 text-base'>Free</p>
                      ) : (
                        <p className='text-red-500 text-base'>
                          {item.price.amount} {item.price.currencyCode}
                        </p>
                      )}
                      <Rate value={Number(item.rating)} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {selectedTour && (
            <CustomModal
              isOpen={isOpen}
              onClose={onClose}
              title='Information Tour And Active'
              footer={
                <div className='flex justify-around items-center w-full'>
                  <Button type='button' onClick={onClose}>
                    Close
                  </Button>
                  <Button type='button'>
                    <a href={selectedTour.bookingLink} target='_blank' rel='noopener noreferrer'>
                      Booking
                    </a>
                  </Button>
                </div>
              }
            >
              <div className='mt-3'>
                <div className='flex justify-center items-center rounded-md'>
                  <img src={selectedTour.pictures[0]} alt='icon-user' className='rounded-md w-full' />
                </div>
                <div className='mt-5'>
                  <div className='mb-3 gap-2'>
                    <h2 className='text-lg font-medium'>Name:</h2>
                    <p className='text-lg flex'>{selectedTour.name}</p>
                  </div>
                  <div className='flex mb-3 gap-2'>
                    <h2 className='text-lg font-medium'>Minimum Duration:</h2>
                    <p className='text-lg flex'>{selectedTour.minimumDuration} hour</p>
                  </div>
                  <div className='flex mb-3 gap-2'>
                    <h2 className='text-lg font-medium'>Price:</h2>
                    <p className='text-lg'>
                      {selectedTour.price.amount} {selectedTour.price.currencyCode}
                    </p>
                  </div>
                  <div className='mb-3 gap-2'>
                    <h2 className='text-lg font-medium'>Description:</h2>
                    <span className='text-lg'>{selectedTour.description}</span>
                  </div>
                </div>
              </div>
            </CustomModal>
          )}
        </>
      )}
    </>
  )
}

export default TourPage
