import React from 'react'
import BgService from '../assets/Bg_Service.png'
import TabServiceTravel from '../components/services/TabServiceTravel'

const ServicesPage: React.FC = () => {
  return (
    <>
      <div className='relative'>
        <img src={BgService} alt='bg_Home' className='w-full h-full object-cover' />
        <div className='absolute top-0 left-0 flex flex-col mt-32 items-center h-full w-full'>
          <h1 className='text-white text-4xl capitalize py-5'>Travel with us</h1>
          <div className='flex flex-col items-center w-3/5 bg-[#d9d9d9] bg-opacity-50 mx-auto p-3 rounded-md'>
            <TabServiceTravel />
          </div>
        </div>
      </div>
    </>
  )
}

export default ServicesPage
