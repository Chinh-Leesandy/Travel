import { useAppSelector } from '../../../app/store/hooks'

export const Profile = () => {
  const user = useAppSelector((state) => state.auth.Iuser)
  return (
    <div className=' mx-auto rounded-md shadow-lg shadow-slate-500 w-1/2 mt-10 mb-6'>
      <h2 className='text-xl text-center font-medium mt-10'>User Information</h2>
      <div className='flex justify-center items-center gap-5 mb-6 p-3'>
        <div className='flex justify-center items-center w-1/5 rounded-l-md'>
          <img src={user?.avatar} alt='icon-user' className='rounded-full w-40' />
        </div>
        <div className='w-3/5 rounded-r-md'>
          <div className='mt-5 mx-5'>
            <div className='flex mb-3 gap-2'>
              <h2 className='text-lg font-medium'>Name:</h2>
              <p className='text-lg flex'>
                {user?.firstName} {user?.lastName}
              </p>
            </div>
            <div className='flex mb-3 gap-2'>
              <h2 className='text-lg font-medium'>Email:</h2>
              <p className='text-lg'>{user?.email}</p>
            </div>
            {user?.phoneNumber && (
              <div className='flex mb-3 gap-2'>
                <h2 className='text-lg font-medium'>Phone Number:</h2>
                <p className='text-lg'>{user?.phoneNumber}</p>
              </div>
            )}
            {user?.password && (
              <div className='flex mb-3 gap-2'>
                <h2 className='text-lg font-medium'>Password:</h2>
                <p className='text-lg'>{user?.password}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
