import React, { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../components/layout/MainLayout'
import Loading from '../components/ui/loading/Loading'
import ProtectedRoute from './ProtectedRoute'

const HomePage = React.lazy(() => import('../page/HomePage'))
const ServicesPage = React.lazy(() => import('../page/ServicesPage'))
const BlogsPage = React.lazy(() => import('../page/BlogsPage'))
const AIPage = React.lazy(() => import('../page/AIPage'))
const TourPage = React.lazy(() => import('../page/TourPage'))
const HotelPage = React.lazy(() => import('../page/HotelPage'))
const FlightPage = React.lazy(() => import('../page/FlightPage'))
const CityDetailPage = React.lazy(() => import('../page/CityDetailPage'))
const BlogDetailPage = React.lazy(() => import('../page/BlogDetailPage'))
const InformationPage = React.lazy(() => import('../page/InfomationPage'))
const Login = React.lazy(() => import('../components/auth/login/Login'))
const Register = React.lazy(() => import('../components/auth/register/Register'))

const createRoute = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<Loading />}>
            <HomePage />
          </Suspense>
        )
      },
      {
        path: '/services',
        element: (
          <Suspense fallback={<Loading />}>
            <ServicesPage />
          </Suspense>
        )
      },
      {
        path: '/services/city/:id',
        element: (
          <Suspense fallback={<Loading />}>
            <CityDetailPage />
          </Suspense>
        )
      },
      {
        path: '/services/tours',
        element: (
          <Suspense fallback={<Loading />}>
            <TourPage />
          </Suspense>
        )
      },
      {
        path: '/services/flight',
        element: (
          <Suspense fallback={<Loading />}>
            <FlightPage />
          </Suspense>
        )
      },
      {
        path: '/services/hotel',
        element: (
          <Suspense fallback={<Loading />}>
            <HotelPage />
          </Suspense>
        )
      },
      {
        path: '/blogs',
        element: (
          <ProtectedRoute>
            <Suspense fallback={<Loading />}>
              <BlogsPage />
            </Suspense>
          </ProtectedRoute>
        )
      },
      {
        path: '/blogs/:id',
        element: (
          <Suspense fallback={<Loading />}>
            <BlogDetailPage />
          </Suspense>
        )
      },
      {
        path: '/ai',
        element: (
          <Suspense fallback={<Loading />}>
            <AIPage />
          </Suspense>
        )
      },
      {
        path: '/information',
        element: (
          <ProtectedRoute>
            <Suspense fallback={<Loading />}>
              <InformationPage />
            </Suspense>
          </ProtectedRoute>
        )
      }
    ]
  },
  {
    path: '/auth/login',
    element: (
      <Suspense fallback={<Loading />}>
        <Login />
      </Suspense>
    )
  },
  {
    path: '/auth/register',
    element: (
      <Suspense fallback={<Loading />}>
        <Register />
      </Suspense>
    )
  }
])

export default createRoute
