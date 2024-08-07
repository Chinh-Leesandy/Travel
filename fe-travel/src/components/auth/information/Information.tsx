import React, { useState } from 'react'
import { HistoryOrderFlight } from './HistoryOrderFlight'
import { HistoryOrderHotel } from './HistoryOrderHotel'
import { Profile } from './Profile'

const Information: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<string>('Profile')

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Profile':
        return <Profile />
      case 'HistoryOrderFlight':
        return <HistoryOrderFlight />
      case 'HistoryOrderHotel':
        return <HistoryOrderHotel />
      default:
        return <Profile />
    }
  }

  return (
    <div>
      <header className='w-4/5 mx-auto mt-6'>
        <nav className='nav flex justify-around items-center'>
          <div
            className={`info flex justify-center items-center gap-3 cursor-pointer ${activeComponent === 'Profile' ? 'font-bold' : ''}`}
            onClick={() => setActiveComponent('Profile')}
          >
            <img
              src='https://i.pinimg.com/564x/b0/83/31/b0833156962d005d1ccbee648cba509b.jpg'
              alt='icon-user'
              className='rounded-full w-10'
            />
            <p>Information</p>
          </div>
          <div
            className={`info flex justify-center items-center gap-3 cursor-pointer ${activeComponent === 'HistoryOrderFlight' ? 'font-bold' : ''}`}
            onClick={() => setActiveComponent('HistoryOrderFlight')}
          >
            <img src='https://bom.so/8ANJf6' alt='order-flight' className='rounded-full w-10 border' />
            <p>Order Flight</p>
          </div>
          <div
            className={`info flex justify-center items-center gap-3 cursor-pointer ${activeComponent === 'HistoryOrderHotel' ? 'font-bold' : ''}`}
            onClick={() => setActiveComponent('HistoryOrderHotel')}
          >
            <img
              src='https://cdn-icons-png.freepik.com/512/6509/6509510.png'
              alt='order-hotel'
              className='rounded-full w-8 border'
            />
            <p>Order Hotel</p>
          </div>
        </nav>
      </header>
      {renderComponent()}
    </div>
  )
}

export default Information
