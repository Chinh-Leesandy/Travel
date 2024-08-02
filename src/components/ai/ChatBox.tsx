import { Input, VStack, Box, Text } from '@chakra-ui/react'
import { useChat } from '../../hooks/ai/useChat'
import Loading from '../ui/loading/Loading'
import Button from '../ui/button/Button'

const ChatBox = () => {
  const { chatContainerRef, loading, messages, inputText, setInputText, sendMessage } = useChat()

  return (
    <VStack spacing={0} align='stretch' h='full'>
      <Box
        className='chat-window bg-white p-4 flex-1 overflow-y-auto'
        ref={chatContainerRef}
        borderRadius='md'
        boxShadow='md'
        border='1px'
        borderColor='gray.200'
        maxH='40vh'
      >
        {messages.map((message, index) => (
          <Box
            key={index}
            className={`message p-3 my-2 rounded-lg max-w-52 ${
              message.sender === 'user' ? 'bg-[#df6951] text-white ml-auto' : 'bg-gray-200 text-gray-800'
            }`}
            alignSelf={message.sender === 'user' ? 'flex-end' : 'flex-start'}
          >
            <Text whiteSpace={message.isCode ? 'pre-wrap' : 'normal'}>{message.text}</Text>
            <Text className='text-xs mt-1' color='white'>
              {message.timestamp.toLocaleTimeString()}
            </Text>
          </Box>
        ))}
      </Box>
      <Box className='p-4 bg-white flex items-center border-t border-gray-200'>
        <Input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder='Type a message...'
          size='md'
          mr={2}
          borderRadius='full'
          borderColor='gray.300'
        />
        <Button type='button' onClick={sendMessage} disabled={loading}>
          Send
        </Button>
        {loading && <Loading />}
      </Box>
    </VStack>
  )
}

export default ChatBox
