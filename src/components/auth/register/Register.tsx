import { Link } from 'react-router-dom'
import IconFace from '../../../assets/IconFace'
import IconGG from '../../../assets/IconGG'
import IconTwitter from '../../../assets/IconTwitter'

const Register: React.FC = () => {
  return (
    <div className='flex mx-16 my-8'>
      <div className='w-1/2'>
        <img
          src='https://cdn-test.traveldiariesapp.com/images/backgrounds/travel-diaries-1.jpg'
          alt='login'
          className='w-full h-full object-cover rounded-md'
        />
      </div>
      <div className='w-1/2 flex flex-col justify-center items-center rounded-r-md text-primary '>
        <form className='w-full p-8'>
          <div className='relative p-2 inline-block text-center mx-44'>
            <div className='absolute top-0 left-0 h-full w-10 border-l-2 border-t-2 border-[#DF6951] pb-6'></div>
            <div className='absolute top-0 right-0 h-full w-10 border-r-2 border-b-2 border-[#DF6951] pt-6'></div>
            <span className='font-bold '>TRAVEL TOURS</span>
          </div>
          <div className='SocialMedia flex justify-center items-center gap-8 mt-5'>
            <IconFace />
            <IconGG />
            <IconTwitter />
          </div>
          <div className='mb-4'>
            <label htmlFor='firstName' className='block text-sm font-medium text-gray-700'>
              First Name
            </label>
            <input
              type='text'
              name='firstName'
              id='firstName'
              placeholder='Enter your first name'
              className='w-full p-3 rounded bg-gray-100 mt-1 '
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='lastName' className='block text-sm font-medium text-gray-700'>
              Last Name
            </label>
            <input
              type='text'
              name='lastName'
              id='lastName'
              placeholder='Enter your last name'
              className='w-full p-3 rounded bg-gray-100 mt-1 '
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
              Email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Enter your email'
              className='w-full p-3 rounded bg-gray-100 mt-1 '
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
              Password
            </label>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Enter your password'
              className='w-full p-3 rounded bg-gray-100 mt-1'
            />
          </div>
          <button type='submit' className='w-full font-bold py-2 rounded-lg text-white bg-[#DF6951]'>
            Register
          </button>
        </form>
        <div className='create-account flex'>
          <p className='text-black'>Do have an account ?</p>
          <Link to='/auth/login' className='font-bold text-[#DF6951]'>
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register
