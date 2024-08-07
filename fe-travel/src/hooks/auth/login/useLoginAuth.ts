import { useNavigate } from 'react-router-dom'
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, FacebookAuthProvider } from 'firebase/auth'
import { auth, db } from '../../../libs/firebaseConfig'
import { login } from '../../../features/auth/auth-slice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../app/store/store'
import { CustomUserFirebase } from '../../../utils/CustomUserFirebase'
import { Login } from '../../../types/auth/Login'
import { getDoc, doc } from 'firebase/firestore'
import { User } from '../../../types/auth/User'

export const useLoginAuth = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const LoginWithGG = async () => {
    try {
      const res = await signInWithPopup(auth, new GoogleAuthProvider())
      const token = await res.user.getIdToken()
      dispatch(login({ accessToken: token, refreshToken: res.user.refreshToken, Iuser: CustomUserFirebase(res.user) }))
      navigate('/')
    } catch (error) {
      console.error('login with google fails', error)
      throw error
    }
  }
  const LoginWithFace = async () => {
    try {
      const res = await signInWithPopup(auth, new FacebookAuthProvider())
      const token = await res.user.getIdToken()
      console.log('login with facebook success', res.user)
      dispatch(login({ accessToken: token, refreshToken: res.user.refreshToken, Iuser: CustomUserFirebase(res.user) }))
      navigate('/')
    } catch (error) {
      console.error('login with facebook fails', error)
      throw error
    }
  }
  const LoginWithEmail = async (loginEmail: Login) => {
    try {
      const res = await signInWithEmailAndPassword(auth, loginEmail.email, loginEmail.password);
      const token = await res.user.getIdToken()
      const userDoc = doc(db, 'users', res.user.uid)
      const information = await getDoc(userDoc)
      if (information.exists()) {
        const data = information.data() as User
        dispatch(login({ accessToken: token, refreshToken: res.user.refreshToken, Iuser: data }))
        navigate('/')
      } else {
        throw new Error('User data not found')
      }
    } catch (error) {
      console.error('Login with email and password fails', error)
      throw error
    }
  }

  return { LoginWithGG, LoginWithEmail, LoginWithFace }
}
