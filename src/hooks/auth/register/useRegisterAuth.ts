import { createUserWithEmailAndPassword } from 'firebase/auth'
import { User } from '../../../types/auth/User'
import { auth, db } from '../../../libs/firebaseConfig'
import { setDoc, doc, serverTimestamp } from 'firebase/firestore'

export const useRegisterAuth = async (user: User) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password)
    const newUser = userCredential.user
    await setDoc(doc(db, 'users', newUser.uid), {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      phoneNumber: user.phoneNumber,
      avatar: user.avatar,
      timeStamp: serverTimestamp()
    })
  } catch (error) {
    console.error('register fails', error)
    throw error
  }
}
