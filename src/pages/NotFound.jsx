import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { PageLayout } from '@/layouts/PageLayout'

const NotFound = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = '/'
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <PageLayout>
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-gray-100 p-16 text-center">
        <h1 id="main-heading" className="text-6xl font-bold text-primary-600">
          404 - Page Not Found
        </h1>
        <p className="text-xl">
          The page you were looking for does not exist, you will be redirected
          to the home page in 5 seconds or you can click the link below.
        </p>
        <NavLink className="text-blue-500 hover:underline" to="/">
          Return to Home Page
        </NavLink>
      </div>
    </PageLayout>
  )
}

export default NotFound
