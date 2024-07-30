import React from 'react'
import Logo from '../../assets/Logo'
import { navigation, NavigationItem, SubNavigationItem } from '../../types/Navigation'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <header className='flex justify-around items-center p-2 text-white absolute top-0 left-0 w-full z-10'>
      <div className='logo'>
        <Logo />
      </div>
      <nav className='relative'>
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
      </nav>
    </header>
  )
}

export default Header
