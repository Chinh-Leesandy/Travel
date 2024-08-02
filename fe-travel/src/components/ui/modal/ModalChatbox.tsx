import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter
} from '@chakra-ui/react'

interface CustomModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  footer?: React.ReactNode
}

const CustomModalChatBox: React.FC<CustomModalProps> = ({ isOpen, onClose, title, children, footer }) => {
  return (
    <Modal isCentered={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay bg='none' />
      <ModalContent position='fixed' bottom='4' right='4' width='sm' maxWidth='sm' margin='0' overflowY='auto'>
        <ModalHeader>
          <div className='flex items-center gap-2'>
            <img
              src='https://i.pinimg.com/236x/db/c6/0b/dbc60bdfd26bef4183b9d5914c9b613c.jpg'
              className='rounded-full w-12'
            />
            {title}
          </div>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody fontSize='sm'>{children}</ModalBody>
        {footer && <ModalFooter>{footer}</ModalFooter>}
      </ModalContent>
    </Modal>
  )
}

export default CustomModalChatBox
