import React from 'react'
import Logo from '../../assets/Logo'
import { navigation, NavigationItem, SubNavigationItem } from '../../types/Navigation'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../app/store/hooks'
// import ColorModeSwitcher from '../ui/dark/light/ColorModeSwitcher'
import LogOut from '../../hooks/auth/logout/Logout'
const Header: React.FC = () => {
  const user = useAppSelector((state) => state.auth.Iuser)
  const logOut = LogOut()
  return (
    <header className='flex justify-around items-center p-2 text-white absolute top-0 left-0 w-full z-10 mx-48 '>
      <div className='logo'>
        <Logo />
      </div>
      <nav className='flex-grow flex justify-center items-center gap-3'>
        <ul className='flex space-x-5'>
          {navigation.map((item: NavigationItem) => (
            <li key={item.id} className='relative group'>
              <Link to={item.link} className='hover:underline text-lg'>
                {item.name}
              </Link>
              {item.subItems && (
                <ul className='absolute left-0 top-full mt-2 w-40 bg-[#D9D9D9] bg-opacity-50 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>
                  {item.subItems.map((subItem: SubNavigationItem) => (
                    <li key={subItem.id} className='border-b last:border-0'>
                      <Link to={subItem.link} className='block px-4 py-2 hover:text-black text-lg'>
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        {/* <ColorModeSwitcher /> */}
        <div className='relative group'>
          <div className='w-7 h-7 bg-gray-500 rounded-full flex items-center justify-center cursor-pointer'>
            {user ? (
              <img src={user.avatar} className='rounded-full' alt='Avatar' />
            ) : (
              <img
                src='https://i.pinimg.com/236x/a9/03/74/a903745cda19c1303bac98bb3a25a775.jpg'
                className='rounded-full'
                alt='Avatar'
              />
            )}
          </div>
          <ul className='absolute right-0 top-full mt-2 w-40 bg-[#D9D9D9] bg-opacity-50 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>
            <li>
              <Link to='/auth/login' className='block px-4 py-2 hover:text-black text-lg'>
                Login
              </Link>
            </li>
            <li>
              <div onClick={logOut} className='block px-4 py-2 hover:text-black text-lg cursor-pointer'>
                Logout
              </div>
            </li>
            <li>
              <Link to='/information' className='block px-4 py-2 hover:text-black text-lg'>
                Information
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
