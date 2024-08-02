import logoFooter from '../../assets/logo-footer.png'
import socalMedia from '../../assets/socal media.png'
import footer from '../../assets/footer.png'
const Footer: React.FC = () => {
  return (
    <div className='relative mt-20 h-[233px]'>
      <div className='grid grid-cols-4  w-4/5 z-20 p-5 '>
        <div className='content'>
          <img src={logoFooter} alt='logoFooter' />
          <p>Travel helps companies manage payments easily.</p>
          <img src={socalMedia} alt='socalMedia' />
        </div>
        <div className='content'>
          <p className='font-bold'>Company</p>
          <p>Blogs</p>
          <p>Tours</p>
          <p>Flight</p>
          <p>Hotel</p>
        </div>
        <div className='content'>
          <p className='font-bold'>Destinations</p>
          <p>Maldives</p>
          <p>Los Angelas</p>
          <p>Las Vegas</p>
          <p>Toronto</p>
        </div>
        <div className='content'>
          <p className='font-bold'>Join Our Newsletter</p>
          <div className='flex'>
            <input
              type='text'
              name='email'
              id='email'
              placeholder='Your email address'
              className='bg-slate-200 rounded-r-md p-2'
            />
            <button className='bg-[#DF6951] text-white rounded-md p-2'>Subscribe</button>
          </div>
          <p className='mt-2'>* Will send you weekly updates for your better tour packages.</p>
        </div>
      </div>
      <img src={footer} alt='footer' className='z-10 absolute bottom-0 right-0 max-h-full h-full' />
    </div>
  )
}
export default Footer
