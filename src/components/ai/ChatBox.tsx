import { useEffect, useRef, useState } from 'react'
import { Button, Input, VStack, Box, Text, Spinner } from '@chakra-ui/react'
import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI('AIzaSyArcBpI8IJ__AQXxWH1IJ0b1TydhNZcu5k')
const model = genAI.getGenerativeModel({ model: 'gemini-pro' })

interface Message {
  text: string
  sender: 'user' | 'ai'
  timestamp: Date
  isCode?: boolean
}

const ChatBox = () => {
  const chatContainerRef = useRef<HTMLDivElement | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputText, setInputText] = useState<string>('')

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages])

  const sendMessage = async () => {
    if (!inputText) return

    setMessages((prevMessages) => [...prevMessages, { text: inputText, sender: 'user', timestamp: new Date() }])

    setLoading(true)

    try {
      const result = await model.generateContent(inputText)
      const text = result.response.text()
      const isCode = text.includes('```')

      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: text,
          sender: 'ai',
          timestamp: new Date(),
          isCode
        }
      ])
    } catch (error) {
      console.error('generateContent error: ', error)
    } finally {
      setLoading(false)
      setInputText('')
    }
  }

  return (
    <VStack spacing={4} align='stretch'>
      <Box className='chat-window bg-gray-100 p-4 flex-1 overflow-auto' ref={chatContainerRef}>
        {messages.map((message, index) => (
          <Box
            key={index}
            className={`message p-2 my-2 ${message.sender === 'user' ? 'bg-blue-200 text-blue-800' : 'bg-gray-200 text-gray-800'} rounded`}
          >
            <Text whiteSpace={message.isCode ? 'pre-wrap' : 'normal'}>{message.text}</Text>
            <Text className={`text-sm ${message.sender === 'user' ? 'text-blue-600' : 'text-gray-600'}`}>
              {message.timestamp.toLocaleString()}
            </Text>
          </Box>
        ))}
      </Box>
      <Box className='p-4 bg-gray-200 flex items-center'>
        <Input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder='Type your message here...'
          size='md'
          mr={2}
        />
        <Button onClick={sendMessage} colorScheme='blue' disabled={loading}>
          Send
        </Button>
        {loading && <Spinner ml={2} />}
      </Box>
    </VStack>
  )
}

export default ChatBox
