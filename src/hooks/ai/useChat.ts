import { useEffect, useRef, useState } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI('AIzaSyArcBpI8IJ__AQXxWH1IJ0b1TydhNZcu5k')
const model = genAI.getGenerativeModel({ model: 'gemini-pro' })

interface Message {
  text: string
  sender: 'user' | 'ai'
  timestamp: Date
  isCode?: boolean
}

export const useChat = () => {
  const chatContainerRef = useRef<HTMLDivElement | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [messages, setMessages] = useState<Message[]>([
    { text: 'May I help you?', sender: 'ai', timestamp: new Date() }
  ])
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
      const isCode = text.includes('\n')
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

  return {
    chatContainerRef,
    loading,
    messages,
    inputText,
    setInputText,
    sendMessage
  }
}
