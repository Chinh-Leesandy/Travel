import { RouterProvider } from 'react-router-dom'
import createRoute from './routes/createRoute'

function App() {
  return (
    <>
      <RouterProvider router={createRoute} />
    </>
  )
}

export default App
