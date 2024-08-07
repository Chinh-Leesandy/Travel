import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../app/store/hooks'

interface ProtectedRouteProps {
  children: React.ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const user = useAppSelector((state) => state.auth.Iuser)
  const navigate = useNavigate()
  if (!user) {
    navigate('/auth/login')
  }

  return <>{children}</>
}

export default ProtectedRoute
