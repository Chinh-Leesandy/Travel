import React from 'react'
import BgBlogs from '../assets/Bg_Blogs.png'
import Schedule from '../components/ai/Schedule'
const AIPage: React.FC = () => {
  return (
    <>
      <div className='relative'>
        <img src={BgBlogs} alt='bg_Home' className='w-full h-full object-cover' />
        <div className='absolute top-0 left-0 flex justify-center items-center h-full w-full'>
          <h1 className='text-white text-4xl capitalize py-5'>AI</h1>
        </div>
      </div>
      <Schedule />
    </>
  )
}

export default AIPage
