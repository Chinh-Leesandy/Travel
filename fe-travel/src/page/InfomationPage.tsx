import Information from '../components/auth/information/Information'

const InformationPage = () => {
  return (
    <div>
      <div className='relative'>
        <img
          src='https://i.pinimg.com/564x/c3/cf/d8/c3cfd8b8f5fee9cd2b75219c1f79f326.jpg'
          alt='bg_Home'
          className='w-full h-24 object-center object-cover'
        />
      </div>
      <Information />
    </div>
  )
}
export default InformationPage
