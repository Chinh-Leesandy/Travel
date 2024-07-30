import { Link } from 'react-router-dom'
import IconFace from '../../../assets/IconFace'
import IconGG from '../../../assets/IconGG'
import IconTwitter from '../../../assets/IconTwitter'
const Login: React.FC = () => {
  return (
    <div className='flex mx-16 my-24'>
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
          <div className='socialMedia flex justify-center items-center gap-8 mt-5'>
            <IconFace />
            <IconGG />
            <IconTwitter />
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
          <div className='forget-password mb-4'>
            <p>Forgot your password ?</p>
          </div>
          <button type='submit' className='w-full font-bold py-2 rounded-lg text-white bg-[#DF6951]'>
            Login
          </button>
        </form>
        <div className='create-account flex'>
          <p className='text-black'>Don't have an account ?</p>
          <Link to='/auth/register' className='font-bold text-[#DF6951]'>
            Create Account
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Login
