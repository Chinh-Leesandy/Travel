import { useState } from 'react'
import { TabService, TabServiceItem } from '../../types/services/TabService'
import Button from '../ui/button/Button'
import SearchTour from './tour/SearchTour'
import FormSearchHotel from './hotel/FormSearchHotel'
import FormSearchFlight from './flight/FormSearchFlight'

const TabServiceTravel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(TabService[0].id)
  return (
    <>
      <div className='tab-service flex items-center justify-around gap-3'>
        {TabService.map((item: TabServiceItem) => (
          <Button
            key={item.id}
            className={item.id === activeTab ? 'bg-primary text-white' : ''}
            onClick={() => setActiveTab(item.id)}
            type='button'
          >
            {item.name}
          </Button>
        ))}
      </div>
      <div className='tab-content mt-4'>
        {activeTab === 'tourandactive' && <SearchTour />}
        {activeTab === 'flight' && <FormSearchFlight />}
        {activeTab === 'hotel' && <FormSearchHotel />}
      </div>
    </>
  )
}

export default TabServiceTravel
