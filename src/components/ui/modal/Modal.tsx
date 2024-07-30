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

const CustomModal: React.FC<CustomModalProps> = ({ isOpen, onClose, title, children, footer }) => {
  return (
    <Modal isCentered blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay bg='none' backdropFilter='blur(5px)' />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        {footer && <ModalFooter>{footer}</ModalFooter>}
      </ModalContent>
    </Modal>
  )
}

export default CustomModal
