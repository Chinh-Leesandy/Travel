import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../page/HomePage'
import ServicesPage from '../page/ServicesPage'
import BlogsPage from '../page/BlogsPage'
import AIPage from '../page/AIPage'
import TourPage from '../page/TourPage'
import HotelPage from '../page/HotelPage'
import FlightPage from '../page/FlightPage'
import MainLayout from '../components/layout/MainLayout'
import Login from '../components/auth/login/Login'
import Register from '../components/auth/register/Register'
import CityDetailPage from '../page/CityDetailPage'
const createRoute = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,

    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/services',
        element: <ServicesPage />
      },
      {
        path: '/services/city/:id',
        element: <CityDetailPage />
      },
      {
        path: '/services/tours',
        element: <TourPage />
      },
      {
        path: '/services/flight',
        element: <FlightPage />
      },
      {
        path: '/services/hotel',
        element: <HotelPage />
      },
      {
        path: '/blogs',
        element: <BlogsPage />
      },
      {
        path: '/ai',
        element: <AIPage />
      }
    ]
  },
  {
    path: '/auth/login',
    element: <Login />
  },
  {
    path: '/auth/register',
    element: <Register />
  }
])

export default createRoute
