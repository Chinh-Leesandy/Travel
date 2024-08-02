import CityDetail from '../components/city/citydetail.tsx/CityDetail'
import BgService from '../assets/Bg_Service.png'

const CityDetailPage: React.FC = () => {
  return (
    <>
      <div className='relative'>
        <img src={BgService} alt='bg_Home' className='w-full h-full object-cover' />
      </div>
      <CityDetail />
    </>
  )
}

export default CityDetailPage
