import { signOut } from 'firebase/auth'
import { auth } from '../../../libs/firebaseConfig'
import { successToast, errorToast } from '../../../utils/toast'
import { AppDispatch } from '../../../app/store/store'
import { logout } from '../../../features/auth/auth-slice'
import { useDispatch } from 'react-redux'

const Logout = () => {
  const dispatch = useDispatch<AppDispatch>()
  const logOut = async () => {
    try {
      await signOut(auth)
      successToast('Logout successfully')
      console.log('User signed out')
      // localStorage.clear()
      // sessionStorage.clear()
      // const blank = 'self';
      // window.location.assign('https://accounts.google.com/logout')
      // window.location.reload();
      dispatch(logout())
    } catch (error) {
      console.error('Logout Error:', error)
      errorToast('Logout Error')
    }
  }

  return logOut;
}

export default Logout;
