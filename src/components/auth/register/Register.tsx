import { useState } from 'react'
import { Link } from 'react-router-dom'
import IconFace from '../../../assets/IconFace'
import IconGG from '../../../assets/IconGG'
import IconTwitter from '../../../assets/IconTwitter'
import { User } from '../../../types/auth/User'
import { useRegisterAuth } from '../../../hooks/auth/register/useRegisterAuth'
const Register: React.FC = () => {
  const [newUser, setNewUser] = useState<User>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
    avatar: 'https://i.pinimg.com/236x/a9/03/74/a903745cda19c1303bac98bb3a25a775.jpg'
  })
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewUser({ ...newUser, [name]: value })
  }
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await useRegisterAuth(newUser)
  }
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
        <div className='relative p-2 inline-block text-center mx-44'>
          <div className='absolute top-0 left-0 h-full w-10 border-l-2 border-t-2 border-[#DF6951] '></div>
          <div className='absolute top-0 right-0 h-full w-10 border-r-2 border-b-2 border-[#DF6951]'></div>
          <span className='font-bold '>TRAVEL TOURS</span>
        </div>
        <div className='SocialMedia flex justify-center items-center gap-8 mt-5'>
          <IconFace />
          <IconGG />
          <IconTwitter />
        </div>
        <form className='w-full px-8 py-4' onSubmit={(e) => handleRegister(e)}>
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
              value={newUser.firstName}
              onChange={handleInputChange}
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
              value={newUser.lastName}
              onChange={handleInputChange}
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
              value={newUser.email}
              onChange={handleInputChange}
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
              value={newUser.password}
              onChange={handleInputChange}
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='phoneNumber' className='block text-sm font-medium text-gray-700'>
              Phone Number
            </label>
            <input
              type='text'
              name='phoneNumber'
              id='phoneNumber'
              placeholder='Enter your phone number'
              className='w-full p-3 rounded bg-gray-100 mt-1 '
              value={newUser.phoneNumber}
              onChange={handleInputChange}
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
