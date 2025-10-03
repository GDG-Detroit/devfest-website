import { useState, useRef, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import gdgDetroitLogo from '@/assets/images/gdg-detroit-logo.png'

function PreviousEventsNavbar() {
  const [isNavVisible, setIsNavVisible] = useState(false)
  const navRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsNavVisible(false)
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const isPreviousEventPage =
    location.pathname.startsWith('/previous-events/') &&
    location.pathname !== '/previous-events'

  return (
    <nav
      ref={navRef}
      className="fixed left-0 top-0 z-10 w-full bg-white p-4 shadow-lg"
    >
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={gdgDetroitLogo} alt="GDG Detroit Logo" className="h-16" />
        </Link>
        <button
          className="rounded border-2 px-4 lg:hidden"
          onClick={() => setIsNavVisible(!isNavVisible)}
        >
          <FaBars className="h-10" />
        </button>
        <ul
          className={`flex flex-col space-y-4 overflow-hidden lg:flex-row lg:justify-end lg:space-x-2 lg:space-y-0 lg:px-4 lg:py-2 ${
            isNavVisible ? 'h-full' : 'h-0 lg:h-full'
          }`}
        >
          <li>
            <Link
              to="/"
              className="p-6 transition-colors hover:text-primary-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/previous-events"
              className={`p-6 transition-colors ${
                location.pathname === '/previous-events'
                  ? 'text-primary-500'
                  : 'hover:text-primary-500'
              }`}
            >
              {isPreviousEventPage ? 'Back to Events' : 'All Events'}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default PreviousEventsNavbar
