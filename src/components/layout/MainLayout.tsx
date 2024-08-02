import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { useDisclosure } from '@chakra-ui/react'
import CustomModalChatBox from '../ui/modal/ModalChatbox'
import ChatBox from '../ai/ChatBox'
  
const MainLayout: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Header />
      <div className='fixed bottom-4 right-4 z-30'>
        <button className='p-2 rounded-full shadow-lg animate-bounce' onClick={onOpen}>
          <img
            src='https://i.pinimg.com/236x/db/c6/0b/dbc60bdfd26bef4183b9d5914c9b613c.jpg'
            className='rounded-full w-12'
          />
        </button>
      </div>
      <Outlet />
      <Footer />
      <CustomModalChatBox isOpen={isOpen} onClose={onClose} title='Chatbox'>
        <ChatBox />
      </CustomModalChatBox>
    </>
  )
}

export default MainLayout
