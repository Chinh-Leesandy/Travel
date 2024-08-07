import { RouterProvider } from 'react-router-dom'
import createRoute from './routes/createRoute'
import { ToastContainer } from 'react-toastify'
function App() {
  return (
    <>
      <RouterProvider router={createRoute} />
      <ToastContainer />
    </>
  )
}

export default App
