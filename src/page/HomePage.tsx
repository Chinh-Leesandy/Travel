import React from 'react'
import VectorHome from '../assets/VectorHome'
import TourGuild from '../assets/tour-guide 1.png'
import Traveling from '../assets/travelling 1.png'
import Hands from '../assets/hands 1.png'
import Medical from '../assets/medical-team 1.png'
import Booktrip from '../assets/Book a trip.png'
import Sepratir from '../assets/Sepratir.png'
import illustration from '../assets/Illustration.png'
import des1 from '../assets/Destination 1.png'
import des2 from '../assets/Destination 2.png'
import des3 from '../assets/Destination 3.png'
import des4 from '../assets/Destination 4.png'
import { Link } from 'react-router-dom'
const HomePage: React.FC = () => {
  return (
    <>
      <div className='relative top-0'>
        <img
          src='https://i.pinimg.com/736x/42/b8/58/42b8589f508cede227fa606f6032a626.jpg'
          alt='bg_Home'
          className='w-full h-full'
        />
        <div className='absolute top-0 left-0 w-2/6 h-full flex items-start justify-center flex-col mx-40 gap-5'>
          <VectorHome />
          <h1 className='text-white text-3xl text-bold mr-20'>No matter where you’re going to, we’ll take you there</h1>
          <div className='search flex gap-2 justify-center items-center bg-[#D9D9D9] p-2 w-full rounded-lg'>
            <input
              type='text'
              placeholder='Do you want to search for tourist destinations?'
              className='w-full bg-[#d9d9d9] bg-opacity-50 text-white  rounded-md p-2'
            />
            <button className='bg-[#DF6951] text-white rounded-md p-2'>Search </button>
          </div>
        </div>
      </div>
      <div className='my-6 mx-auto z-20'>
        <h3 className='uppercase text-[#DF6951] text-sm text-center'>Category</h3>
        <h3 className='text-[#181E4B] text-2xl capitalize text-center'>We offer best services</h3>
        <div className='flex justify-center items-center gap-3 mt-3'>
          <div className='service_1 text-center w-1/6  rounded-lg shadow-slate-500 p-2'>
            <img src={TourGuild} alt='tour-guide' className='mx-auto' />
            <p>Guided Tours</p>
            <p className='text-center'>sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
          </div>
          <div className='service_1 text-center w-1/6 shadow-xl rounded-lg shadow-slate-500 p-2'>
            <img src={Traveling} alt='Traveling' className='mx-auto' />
            <p>Best Flights Options</p>
            <p className='text-center'>sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
          </div>
          <div className='service_1 text-center w-1/6  rounded-lg shadow-slate-500 p-2'>
            <img src={Hands} alt='Hands' className='mx-auto' />
            <p>Religious Tours</p>
            <p className='text-center'>sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
          </div>
          <div className='service_1 text-center w-1/6 rounded-lg shadow-slate-500 p-2'>
            <img src={Medical} alt='Medical' className='mx-auto' />
            <p>Medical insurance</p>
            <p className='text-center'>sunt qui repellat saepe quo velit aperiam id aliquam placeat.</p>
          </div>
        </div>
      </div>
      <div className='ml-52 z-20'>
        <img src={Booktrip} alt='' />
      </div>
      <img src={Sepratir} alt='Sepratir' />
      <div className='mt-8 ml-40 flex justify-between '>
        <div className='content w-2/5'>
          <h3 className='uppercase text-[#DF6951] text-sm mb-2'>Promotion</h3>
          <h3 className='text-[#181E4B] text-2xl capitalize mb-2'>We Provide You Best Europe Sightseeing Tours</h3>
          <p className='mb-2'>
            Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non
            quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut
            optio quibusdam!
          </p>
          <button className='bg-[#DF6951] text-white rounded-md p-2'>
            <Link to='services/tours'>Go To Tour</Link>{' '}
          </button>
        </div>
        <div className='img relative mr-48'>
          <img src={illustration} alt='illustration' className='h-[450px]' />
        </div>
        <div className='img_detail absolute flex gap-8 justify-center items-center mt-64'>
          <img src={des1} alt='des1' className='w-[150px]' />
          <img src={des2} alt='des2' className='w-[150px]' />
          <img src={des3} alt='des3' className='w-[150px]' />
          <img src={des4} alt='des4' className='w-[150px]' />
        </div>
      </div>
    </>
  )
}

export default HomePage
