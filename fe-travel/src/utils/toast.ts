import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const successToast = (message: string) => {
  toast.success(message, {
    position: 'top-right',
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light'
  })
}

export const errorToast = (message: string) => {
  toast.error(message, {
    position: 'top-right',
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light'
  })
}