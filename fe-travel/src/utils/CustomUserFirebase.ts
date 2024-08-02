import { User } from '../types/auth/User'
import { User as FirebaseUser } from 'firebase/auth'

export const CustomUserFirebase = (user: FirebaseUser): User => {
  const nameParts = user.displayName?.split('_') || []
  const firstName = nameParts[0] || ''
  const lastName = nameParts.slice(1).join(' ') || ''
  return {
    firstName: firstName,
    lastName: lastName,
    email: user.email || '',
    password: '',
    phoneNumber: '',
    avatar: user.photoURL || ''
  }
}
